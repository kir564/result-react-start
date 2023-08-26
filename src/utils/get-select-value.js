import { SELECT_OPTIONS } from '../constants';

export const getSelectValue = (sortingValue) =>
  SELECT_OPTIONS.find((option) => option.value === sortingValue);
