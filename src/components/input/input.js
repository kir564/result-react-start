import styles from './input.module.css';
import { handlerInput, handlerBlur } from '../../handlers';

export const Input = ({ type, name, plaseholder, state }) => {
  const { inputError, user } = state;

  return (
    <label
      className={`${styles.label} ${inputError[name] && styles.errorInLabel}`}
    >
      <input
        type={type}
        name={name}
        placeholder={plaseholder}
        value={user[name]}
        onChange={({ target }) => handlerInput(target, state)}
        onBlur={({ target }) => handlerBlur(target, state)}
      />
      {inputError[name] && (
        <div className={styles.error}>{inputError[name]}</div>
      )}
    </label>
  );
};
