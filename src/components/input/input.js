import styles from './input.module.css';

export const Input = ({ name, type, placeholder, errors, register }) => {
  return (
    <label className={`${styles.label} ${errors[name] && styles.errorInLabel}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
      {errors[name] && (
        <div className={styles.error}>{errors[name]?.message}</div>
      )}
    </label>
  );
};
