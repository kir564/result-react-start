import { USER } from '../constans';
import { checkValidForm } from '../utils';

export const handlerInput = (target, state) => {
  const {user, setUser, inputError, setInputError} = state
  
  setUser({ ...user, [target.name]: target.value });
  setInputError({...inputError, [target.name]: null})

  if(target.name === USER.PASSWORD ) {
    if (target.value.length < 5) {
      const error = 'Пароль должен содержать не менее 5 символов'
      setInputError({...inputError, [target.name]: error})
    }
  }

  
};
