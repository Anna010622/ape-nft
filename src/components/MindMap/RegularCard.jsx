import styles from './mindMap.module.scss';

const RegularCard = ({ text, title }) => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{text}</p>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
};
export default RegularCard;
