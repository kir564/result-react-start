import { STORE_ACTION } from '../constants';

export const changeStatusAction = (status) => ({
  type: STORE_ACTION.CHANGE_STATUS,
  status: status,
});
