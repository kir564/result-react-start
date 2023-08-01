import { USER } from "../constans";

export const checkValidForm = (user, inputError) =>
  Object.values(user).every((value) => value) &&
  Object.values(inputError).every((error) => error === null) && user[USER.PASSWORD] === user[USER.REPEAT_PASSWORD];

