import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from './components';
import { USER } from './constans';
import { fieldsScheme } from './patterns';
import { handleForm } from './handlers';
import styles from './registration.module.css';

function Registration() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isValid },
  } = useForm({
    defaultValues: {
      [USER.EMAIL]: '',
      [USER.PASSWORD]: '',
      [USER.CONFIRM_PASSWORD]: '',
    },
    mode: 'all',
    resolver: yupResolver(fieldsScheme),
  });

  const buttonSubmitRef = useRef();

  useEffect(() => {
    if (isValid) {
      buttonSubmitRef.current.focus();
    }

    if (isSubmitSuccessful) {
      reset();
    }
  });

  return (
    <div className={styles.registration}>
      <form onSubmit={handleSubmit(handleForm)}>
        <Input
          type='email'
          placeholder='Почта'
          name={USER.EMAIL}
          errors={errors}
          register={register}
        />
        <Input
          type='password'
          placeholder='Пароль'
          name={USER.PASSWORD}
          errors={errors}
          register={register}
        />
        <Input
          type='password'
          placeholder='Повтор пароля'
          name={USER.CONFIRM_PASSWORD}
          errors={errors}
          register={register}
        />
        <button disabled={!isValid} ref={buttonSubmitRef}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default Registration;
