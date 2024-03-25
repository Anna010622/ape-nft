import { useState } from 'react';
import Title from '../Title/Title';
import Button from '../Buttons/Button';
import iconMetamask from '../../assets/icons/metamask.svg';
import iconDiscord from '../../assets/icons/discord.svg';
import styles from './contactUs.module.scss';
import Spinner from '../Spinner/Spinner';

const ContactUs = () => {
  const [state, setState] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pending, setPending] = useState(false);

  const handleChange = ({ target }) => {
    setState((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const submit = async (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    try {
      setPending(true);
      const response = await fetch(
        'https://expample---------------/',
        requestOptions,
      );
      const result = await response.json();
      setSuccess(true);
      setPending(false);
      setState({});
      return result;
    } catch (error) {
      setError(true);
      setPending(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(state);
  };

  return (
    <section className="section" id="mint">
      <div className="container">
        <Title>Are you in?</Title>
        <div className={styles.wrapper}>
          <p className={styles.text}>
            Join the YACHT APE community to be one of the first to receive our
            limited edition NFT
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
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
                className={
                  error
                    ? `${styles.input} ${styles.errorInput}`
                    : `${styles.input}`
                }
                type="text"
                placeholder="@username"
                required
                name="discord"
                onChange={handleChange}
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
                className={
                  error
                    ? `${styles.input} ${styles.errorInput}`
                    : `${styles.input}`
                }
                type="text"
                placeholder="Wallet address"
                required
                name="metamask"
                onChange={handleChange}
              />
              {error && <p className={styles.error}>Wrong address</p>}
            </label>

            <Button className="dark">
              {pending ? (
                <Spinner />
              ) : success ? (
                'Minted'
              ) : error ? (
                'Error'
              ) : (
                'Mint'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
