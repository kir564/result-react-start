import { USER } from '../constans';

export const handlerBlur = (target, state) => {
  const { user, inputError, setInputError } = state;

  let error = null;

  if (target.name === USER.EMAIL) {
    const pattern =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    if (!pattern.test(target.value)) {
      error = 'Неверный формат электронной почты';
    }
  }

  if (target.name === USER.PASSWORD) {
    const pattern = /^[\w]*$/;
    if (!pattern.test(target.value)) {
      error = 'Пароль должен содержать только цифры  буквы';
    } else if (target.value.length < 5) {
      error = 'Пароль должен содержать не менее 5 символов';
    }
  }

  if (target.name === USER.REPEAT_PASSWORD) {
    if (target.value !== user.password) {
      error = 'Повтор пароля не верный';
    }
  }

  setInputError({ ...inputError, [target.name]: error });
};
