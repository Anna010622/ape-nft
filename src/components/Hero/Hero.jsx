import styles from './hero.module.scss';
import poster from '../../assets/images/hero/hero-mob.png';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.accentText}>diD yOu seE iT ?</p>
        <h1 className={styles.title}>YACHT APES</h1>
        <p className={styles.accentText}>Apes aRe eveRywhere</p>
        <img className={styles.img} src={poster} alt="#" />
        <Button>Meet Apes</Button>
        <p className={styles.text}>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </p>
      </div>
    </div>
  );
};

export default Hero;
