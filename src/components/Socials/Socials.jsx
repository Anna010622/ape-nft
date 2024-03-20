import styles from './socials.module.scss';

const Socials = ({ closeMobileMenu }) => {
  return (
    <ul className={styles.socials}>
      <li className={styles.item} onClick={closeMobileMenu}>
        <a href="">1</a>
      </li>
      <li className={styles.item} onClick={closeMobileMenu}>
        <a href="">2</a>
      </li>
      <li className={styles.item} onClick={closeMobileMenu}>
        <a href="">3</a>
      </li>
    </ul>
  );
};

export default Socials;
