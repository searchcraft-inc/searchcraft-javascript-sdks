import type { SearchcraftAdSource } from './SearchcraftConfig.types';

export interface SubscriptionEventMap {
  ad_container_rendered: AdContainerSubscriptionEvent;
  query_fetched: QueryFetchedEvent;
  query_submitted: QuerySubmittedEvent;
  input_cleared: InputClearedEvent;
  no_results_returned: NoResultsReturnedEvent;
}

export interface AdContainerSubscriptionEvent extends SubscriptionEvent {
  name: 'ad_container_rendered';
  data: {
    adContainerId: string;
    adSource: SearchcraftAdSource;
    searchTerm: string;
  };
}

export interface QuerySubmittedEvent extends SubscriptionEvent {
  name: 'query_submitted';
  data: {
    searchTerm: string;
  };
}

export interface QueryFetchedEvent extends SubscriptionEvent {
  name: 'query_fetched';
  data: {
    searchTerm: string;
  };
}

export interface InputClearedEvent extends SubscriptionEvent {
  name: 'input_cleared';
}

export interface NoResultsReturnedEvent extends SubscriptionEvent {
  name: 'no_results_returned';
}

export type SubscriptionEventName = keyof SubscriptionEventMap;

export type SubscriptionEventCallback<T extends SubscriptionEventName> = (
  event: SubscriptionEventMap[T],
) => void;

export type UnsubscribeFunction = () => void;

export interface SubscriptionEvent {
  name: SubscriptionEventName;
}
