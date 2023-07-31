import { USER } from "../constans";

export const initialUser = () => ({
  [USER.EMAIL]: '',
  [USER.PASSWORD]: '',
  [USER.REPEAT_PASSWORD]: '',
});
