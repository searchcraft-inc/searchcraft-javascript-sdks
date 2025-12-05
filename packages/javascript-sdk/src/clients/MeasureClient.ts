import type {
  MeasureEventName,
  MeasureRequest,
  MeasureRequestProperties,
  MeasureRequestUser,
  SearchcraftConfig,
  SearchcraftSDKInfo,
} from '@types';
import { nanoid } from 'nanoid';

const MEASURE_REQUEST_DEBOUNCE = 600;

export class MeasureClient {
  private measureRequestTimeout: NodeJS.Timeout | undefined;
  private measureRequestsBatched: MeasureRequest[] = [];
  private config: SearchcraftConfig;
  private sdkInfo: SearchcraftSDKInfo;
  private userId: string;
  private userType: 'authenticated' | 'anonymous';
  sessionId: string;

  constructor(
    config: SearchcraftConfig,
    sdkInfo: SearchcraftSDKInfo,
    userId: string,
    userType: 'authenticated' | 'anonymous',
  ) {
    this.config = config;
    this.sdkInfo = sdkInfo;
    this.userId = userId;
    this.userType = userType;
    this.sessionId = nanoid();
    this.sendMeasureEvent('sdk_initialized').catch((error) => {
      console.error('Error sending sdk_initialized event:', error);
    });
  }

  /**
   * Getter for the base url used by the /measure endpoints.
   */
  private get baseMeasureUrl(): string {
    return `${this.config.endpointURL}/measure`;
  }

  /**
   * Getter for the measure request user. Uses config values + navigator values.
   */
  private get measureRequestUser(): MeasureRequestUser {
    return {
      user_id: this.userId,
      locale: navigator.language || 'en-US',
      os: navigator.userAgent.includes('Windows')
        ? 'Windows'
        : navigator.userAgent.includes('Mac')
          ? 'Mac'
          : navigator.userAgent.includes('Linux')
            ? 'Linux'
            : 'Unknown',
      platform: navigator.platform || 'Unknown',
      sdk_name: this.sdkInfo.sdkName,
      sdk_version: this.sdkInfo.sdkVersion,
      user_agent: navigator.userAgent || 'Unknown',
    };
  }

  /**
   * Sends a measure event to the `/measure/event` endpoint for analytics purposes.
   *
   * @param {MeasureEventName} eventName - Name of the event.
   * @param {Partial<MeasureRequestProperties>} properties - Additional properties to send with the event.
   * @param {Partial<MeasureRequestUser>} user - Additional user properites to send with the event.
   */
  sendMeasureEvent = async (
    eventName: MeasureEventName,
    properties: Partial<MeasureRequestProperties> = {},
    user: Partial<MeasureRequestUser> = {},
  ) => {
    /**
     * Builds the request object based on config values + provided arguments.
     */
    const request: MeasureRequest = {
      event_name: eventName,
      properties: {
        searchcraft_index_names: this.config.indexName ? [this.config.indexName] : [],
        searchcraft_federation_name: this.config.federationName,
        session_id: this.sessionId,
        ...properties,
      },
      user: {
        ...this.measureRequestUser,
        ...user,
      },
    };

    // Send document_clicked events immediately
    if (eventName === 'document_clicked') {
      const body = JSON.stringify(request);
      const url = `${this.baseMeasureUrl}/event`;

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.config.readKey,
            'X-Sc-User-Id': this.userId,
            'X-Sc-Session-Id': this.sessionId,
            'X-Sc-User-Type': this.userType,
          },
          body,
          keepalive: true,
        });

        if (!response.ok) {
          console.error(
            `Error sending MeasureRequest: ${response.status} ${response.statusText}`,
          );
        }
      } catch (error) {
        console.error('Error sending MeasureRequest:', error);
      }
    } else {
      // Otherwise send in batches
      this.measureRequestsBatched.push(request);
      clearTimeout(this.measureRequestTimeout);

      this.measureRequestTimeout = setTimeout(() => {
        const payload = JSON.stringify({ items: this.measureRequestsBatched });
        const url = `${this.baseMeasureUrl}/batch`;

        (async () => {
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: this.config.readKey,
                'X-Sc-User-Id': this.userId,
                'X-Sc-Session-Id': this.sessionId,
                'X-Sc-User-Type': this.userType,
              },
              body: payload,
              keepalive: true,
            });

            this.measureRequestsBatched = [];
            if (!response.ok) {
              console.error(
                `Error sending MeasureRequest: ${response.status} ${response.statusText}`,
              );
            }
          } catch (error) {
            this.measureRequestsBatched = [];
            console.error('Error sending MeasureRequest:', error);
          }
        })().catch((error) => {
          console.error('Unhandled error in MeasureRequest batch:', error);
        });
      }, MEASURE_REQUEST_DEBOUNCE);
    }
  };
}
