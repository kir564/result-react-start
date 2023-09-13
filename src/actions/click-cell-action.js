import { STORE_ACTION } from '../constants';

export const clickCellAction = (newField) => ({
  type: STORE_ACTION.CLICK_CELL,
  field: newField,
});
