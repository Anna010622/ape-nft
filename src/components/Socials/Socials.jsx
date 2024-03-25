import discordLogo from '../../assets/icons/discord2.svg';
import xLogo from '../../assets/icons/x.svg';
import shipLogo from '../../assets/icons/logo-ship.svg';
import styles from './socials.module.scss';

const Socials = ({ closeMobileMenu, isMenuOpened }) => {
  return (
    <ul
      className={
        isMenuOpened
          ? `${styles.socials} ${styles.socialsInMobMenu}`
          : styles.socials
      }
    >
      <li className={styles.item} onClick={closeMobileMenu}>
        <a
          href="https://www.google.com.ua/?hl=uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.icon} src={discordLogo} alt="Discord logo" />
        </a>
      </li>
      <li className={styles.item} onClick={closeMobileMenu}>
        <a
          href="https://www.google.com.ua/?hl=uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.icon} src={xLogo} alt="X logo" />
        </a>
      </li>
      <li className={styles.item} onClick={closeMobileMenu}>
        <a
          href="https://www.google.com.ua/?hl=uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.icon} src={shipLogo} alt="Ship logo" />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
