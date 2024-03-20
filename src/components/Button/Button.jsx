import styles from './button.module.scss';

const Button = ({ children, ...rest }) => {
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
};
export default Button;
