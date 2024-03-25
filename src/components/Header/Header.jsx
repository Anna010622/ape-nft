import { useState } from 'react';
import logo from '../../assets/icons/logo.svg';
import Menu from '../Menu/Menu';
import Socials from '../Socials/Socials';

import styles from './header.module.scss';

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleModal = () => {
    setIsMenuOpened(!isMenuOpened);
  };
  const closeMobileMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <a href="/">
            <img
              className={
                isMenuOpened
                  ? `${styles.logo} ${styles.logoInMenu}`
                  : `${styles.logo}`
              }
              src={logo}
              alt="Logo"
            />
          </a>
          <div>
            <Menu isMenuOpened={isMenuOpened} toggleModal={toggleModal} />
            <Socials
              isMenuOpened={isMenuOpened}
              closeMobileMenu={closeMobileMenu}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
