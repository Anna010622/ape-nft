import { useEffect, useRef, useState } from 'react';
import styles from './accordion.module.scss';

const Accordion = ({ question, answer, id, active, setActive, url }) => {
  const [height, setHeight] = useState(0);
  const answerRef = useRef(null);

  useEffect(() => {
    setHeight(answerRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    const updateSize = () => {
      setHeight(answerRef.current.scrollHeight);
    };
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  console.log(height);

  return (
    <div
      className={
        active === id
          ? `${styles.accordion} ${styles.active}`
          : `${styles.accordion}`
      }
      onClick={() => setActive(id)}
    >
      <img className={styles.img} src={url} alt="image" />

      <div className={styles.content}>
        <div className={styles.number}>{`[ ${id} ]`}</div>
        <div className={styles.texWrapper}>
          <h3 className={styles.question}>{question}</h3>
          <p
            className={styles.answer}
            ref={answerRef}
            style={{
              height: `${active === id ? height : 0}px`,
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
