import { USER } from "../constans";
import { initialUser } from "../utils";

export const handlerForm = ({ event, user, setUser }) => {
  event.preventDefault();
  const formData = {...user}
  delete formData[USER.REPEAT_PASSWORD]
  console.log('user :', formData);
  setUser(initialUser);
};
