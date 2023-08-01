import * as yup from 'yup';
import { USER } from '../../constans';

export const fieldsScheme = yup
  .object()
  .shape({
    [USER.EMAIL]: yup
      .string()
      .matches(
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
        'Неверный формат электронной почты'
      ),
    [USER.PASSWORD]: yup
      .string()
      .matches(/^[\w]*$/, 'Должны использоваться буквы, цифры.')
      .max(4, 'Должно быть не больше 4 символов.')
      .min(2, 'Должно быть не меньше 2 символов.'),
    [USER.CONFIRM_PASSWORD]: yup
      .string()
      .oneOf([yup.ref(USER.PASSWORD)], 'Не верный пароль'),
  })
  .required();
