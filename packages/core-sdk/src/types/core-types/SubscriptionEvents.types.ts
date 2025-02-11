export interface SubscriptionEventMap {
  ad_slot_shown: AdSlotSubscriptionEvent;
  query_submitted: QuerySubmittedEvent;
  input_cleared: InputClearedEvent;
  no_results_returned: NoResultsReturnedEvent;
}

export interface AdSlotSubscriptionEvent extends SubscriptionEvent {
  name: 'ad_slot_shown';
}

export interface QuerySubmittedEvent extends SubscriptionEvent {
  name: 'query_submitted';
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
