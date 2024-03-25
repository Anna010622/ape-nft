import { useEffect } from 'react';
import Copyright from '../Copyright/Copyright';
import navItems from './navItems.json';
import styles from './menu.module.scss';

const Menu = ({ isMenuOpened, toggleModal }) => {
  useEffect(() => {
    if (isMenuOpened && window.matchMedia('(max-width: 767.98px)').matches) {
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }
  }, [isMenuOpened]);

  const items = navItems.map((item) => {
    return (
      <li className={styles.item} key={item.id} onClick={toggleModal}>
        <a className={styles.link} href={`#${item.scrollTo}`}>
          <span className={styles.text}>{item.title}</span>
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
        <span className={styles.text}> {isMenuOpened ? 'Close' : 'Menu'}</span>
      </button>
    </>
  );
};

export default Menu;
