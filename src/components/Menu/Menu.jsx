import navItems from './navItems.json';
import styles from './menu.module.scss';
import { useEffect } from 'react';
import Copyright from '../Copyright/Copyright';

const Menu = ({ isMenuOpened, toggleModal }) => {
  useEffect(() => {
    if (isMenuOpened) {
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }
  }, [isMenuOpened]);

  const items = navItems.map((item) => {
    return (
      <li key={item.id} onClick={toggleModal}>
        <a className={styles.item} href="#section5">
          {item.title}
        </a>
      </li>
    );
  });

  return (
    <>
      <div
        className={
          isMenuOpened
            ? `${styles.menu} mobileMenuOpened`
            : `${styles.menu} mobileMenuHidden`
        }
      >
        <nav className={styles.nav}>
          <ul className={styles.list}>{items}</ul>
        </nav>
        <Copyright />
      </div>

      <button className={styles.btn} onClick={toggleModal}>
        {isMenuOpened ? 'Close' : 'Menu'}
      </button>
    </>
  );
};

export default Menu;
