import styles from './button.module.scss';

const BtnLink = ({ children, className, ...rest }) => {
  return (
    <a
      className={
        className === 'dark' ? `${styles.btn} ${styles.dark}` : `${styles.btn}`
      }
      {...rest}
    >
      {children}
    </a>
  );
};
export default BtnLink;
