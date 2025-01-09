export type FilterItemDateRangeOptions = {
  minDate: Date;
  maxDate: Date;
  granularity: 'year' | 'month' | 'day';
};

export type NumericItemOptions = {
  min: number;
  max: number;
  granularity: number;
};

export type FacetOptions = {
  showSublevel: boolean;
};

export type FilterItem = {
  fieldName: string;
  type: 'facets' | 'dateRange' | 'numericRange';
  label: string;
  options: FilterItemDateRangeOptions | NumericItemOptions | FacetOptions;
};
