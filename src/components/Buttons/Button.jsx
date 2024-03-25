import styles from './button.module.scss';

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      className={
        className === 'dark' ? `${styles.btn} ${styles.dark}` : `${styles.btn}`
      }
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
