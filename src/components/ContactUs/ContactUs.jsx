import Title from '../Title/Title';
import Button from '../Button/Button';
import iconMetamask from '../../assets/icons/metamask.svg';
import iconDiscord from '../../assets/icons/discord.svg';
import styles from './contactUs.module.scss';
import { useState } from 'react';

const ContactUs = () => {
  const [error, setError] = useState(false);

  return (
    <section className="section" id="mint">
      <div className="container">
        <Title>Are you in?</Title>
        <div className={styles.wrapper}>
          <p className={styles.text}>
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </p>

          <form className={styles.form}>
            <label className={styles.field}>
              <div className={styles.iconContainer}>
                <img
                  className={styles.icon}
                  src={iconDiscord}
                  alt="Discord`s icon"
                  width="24px"
                  height="24px"
                />
              </div>

              <input
                className={styles.input}
                type="text"
                placeholder="@username"
                required
              />
              {error && <p className={styles.error}>Wrong discord</p>}
            </label>

            <label className={styles.field}>
              <div className={styles.iconContainer}>
                <img
                  className={styles.icon}
                  src={iconMetamask}
                  alt="Metamask`s icon"
                  width="24"
                  height="24"
                />
              </div>

              <input
                className={styles.input}
                type="text"
                placeholder="Wallet address"
                required
              />
              {error && <p className={styles.error}>Wrong address</p>}
            </label>

            <Button className="dark">Mint</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
