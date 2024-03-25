import { useState, useEffect } from 'react';
import data from './data';
import { Slide, Slider } from '../Slider/Slider';
import Title from '../Title/Title';
import ActiveCard from './ActiveCard';
import RegularCard from './RegularCard';
import styles from './mindMap.module.scss';

const MindMap = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setMedia();
  }, []);
  useEffect(() => {
    window.addEventListener('resize', setMedia);
    return () => window.removeEventListener('resize', setMedia);
  }, []);

  const setMedia = () => {
    setIsMobile(window.matchMedia('(max-width: 767.98px)').matches);
    setIsTablet(window.matchMedia('(min-width: 768px)').matches);
  };

  return (
    <section className="section" id="m-map">
      <div className="container">
        <Title>Mind map</Title>

        {isMobile && (
          <Slider gap="24" visibleAmountSlide="1">
            {data.map((el) =>
              !el.link ? (
                <Slide key={el.id} slideWidth="100%">
                  <RegularCard title={el.title} text={el.text} />
                </Slide>
              ) : (
                <Slide key={el.id} slideWidth="100%">
                  <ActiveCard link={el.link} icon={el.icon} title={el.title} />
                </Slide>
              ),
            )}
          </Slider>
        )}

        {isTablet && (
          <ul className={styles.list}>
            {data.map((el) => (
              <li key={el.id}>
                {el.link ? (
                  <ActiveCard link={el.link} icon={el.icon} title={el.title} />
                ) : (
                  <RegularCard title={el.title} text={el.text} />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default MindMap;
