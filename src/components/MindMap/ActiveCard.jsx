import styles from './mindMap.module.scss';

const ActiveCard = ({ link, icon, title }) => {
  return (
    <div className={styles.cardActive}>
      <a
        className={styles.card}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.icon}
          src={icon}
          alt="Arrow icon"
          width="48"
          height="48"
        />
        <h3 className={styles.cardTitle}>{title}</h3>
      </a>
    </div>
  );
};
export default ActiveCard;
