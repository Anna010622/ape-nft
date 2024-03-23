import styles from './artCard.module.scss';

const ArtCard = ({ art, id }) => {
  return <img className={styles.img} src={art} alt={`Art №${id}`} />;
};

export default ArtCard;
