import { useState } from 'react';
import logo from '../../assets/images/logo/logo.svg';
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
        <a href="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </a>
        <div>
          <Menu isMenuOpened={isMenuOpened} toggleModal={toggleModal} />
          <Socials closeMobileMenu={closeMobileMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
