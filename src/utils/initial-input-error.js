import { USER } from "../constans";

export const initialInputError = () => ({
    [USER.EMAIL]: null,
    [USER.PASSWORD]: null,
    [USER.REPEAT_PASSWORD]: null
})