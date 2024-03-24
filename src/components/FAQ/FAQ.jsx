import { useState } from 'react';
import Accordion from '../Accordion/Accordion';
import data from './data';
import Title from '../Title/Title';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const [active, setActive] = useState(1);

  const toggle = (index) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <Title>FAQ</Title>

        <ul>
          {data.map((el) => {
            return (
              <li
                className={
                  el.id === active
                    ? `${styles.item} ${styles.itemActive}`
                    : `${styles.item}`
                }
                key={el.id}
              >
                <Accordion
                  question={el.question}
                  answer={el.answer}
                  id={el.id}
                  url={el.url}
                  active={active}
                  setActive={toggle}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
