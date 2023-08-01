import styles from './registration.module.css';
import { useState, useRef, useEffect } from 'react';
import { Input } from './components';
import { handlerForm } from './handlers';
import { initialUser, initialInputError, checkValidForm } from './utils';
import { USER } from './constans';

function Registration() {
  const [user, setUser] = useState(() => initialUser());
  const [inputError, setInputError] = useState(() => initialInputError());
  const submitButtonRef = useRef();

  const state = { user, setUser, inputError, setInputError };
  
  useEffect(() => {
    if (checkValidForm(user, inputError)) {
      submitButtonRef.current.focus();
    }
  }, [user, inputError])
  

  return (
    <div className={styles.container}>
      <div className={styles.registration}>
        <form onSubmit={(event) => handlerForm({ event, user, setUser })}>
          <Input
            type='email'
            name={USER.EMAIL}
            plaseholder='Почта'
            state={state}
          />

          <Input
            type='password'
            name={USER.PASSWORD}
            plaseholder='Пароль'
            state={state}
          />

          <Input
            type='password'
            name={USER.REPEAT_PASSWORD}
            plaseholder='Повторите пароль'
            state={state}
          />

          <button
            ref={submitButtonRef}
            disabled={!checkValidForm(user, inputError)}
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
