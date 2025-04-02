import { nanoid } from 'nanoid';
import type {
  MeasureEventName,
  MeasureRequest,
  MeasureRequestProperties,
  MeasureRequestUser,
  SearchcraftConfig,
  SearchcraftSDKInfo,
} from '../types';

const MEASURE_REQUEST_DEBOUNCE = 600;

export class MeasureClient {
  private measureRequestTimeout: NodeJS.Timeout | undefined;
  private measureRequestsBatched: MeasureRequest[] = [];
  private config: SearchcraftConfig;
  private sdkInfo: SearchcraftSDKInfo;
  private userId: string;
  private sessionId: string;

  constructor(
    config: SearchcraftConfig,
    sdkInfo: SearchcraftSDKInfo,
    userId: string,
  ) {
    this.config = config;
    this.sdkInfo = sdkInfo;
    this.userId = userId;
    this.sessionId = nanoid();
    this.sendMeasureEvent('sdk_initialized');
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
  sendMeasureEvent = (
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
        searchcraft_index_names: this.config.index,
        session_id: this.sessionId,
        ...properties,
      },
      user: {
        ...this.measureRequestUser,
        ...user,
      },
    };

    this.measureRequestsBatched.push(request);
    clearTimeout(this.measureRequestTimeout);

    this.measureRequestTimeout = setTimeout(async () => {
      const payload = JSON.stringify({ items: this.measureRequestsBatched });
      const url = `${this.baseMeasureUrl}/batch`;

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: this.config.readKey,
            'X-Sc-User-Id': this.userId,
          },
          body: payload,
          keepalive: true,
        });

        this.measureRequestsBatched = [];
        if (!response.ok) {
          throw new Error(
            `Failed to send request: ${response.status} ${response.statusText}`,
          );
        }
      } catch (error) {
        console.error('Error sending MeasureRequest:', error);
        this.measureRequestsBatched = [];
        throw error;
      }
    }, MEASURE_REQUEST_DEBOUNCE);
  };
}
