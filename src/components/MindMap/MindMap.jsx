import { useState, useEffect, useRef } from 'react';
import icon from '../../assets/icons/up-left-arrow.svg';
import styles from './mindMap.module.scss';
import Title from '../Title/Title';

let slideAmount = 0;

const MindMap = () => {
  const [sliderWidth, setSliderWidth] = useState();
  const [currentSlid, setCurrentSlide] = useState(0);
  const [x1, setX1] = useState(0);

  const slider = useRef(null);
  const slide = useRef(null);

  let translate = sliderWidth * currentSlid;

  const swipeStart = (e) => {
    const xCoordinate = e.pageX || e.changedTouches[0].pageX;
    setX1(xCoordinate);
  };

  const swipeEnd = (e) => {
    const xCoordinate = e.pageX || e.changedTouches[0].pageX;
    if (x1 < xCoordinate && currentSlid > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
    if (x1 > xCoordinate && currentSlid < slideAmount - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    slideAmount = slider.current.children.length;
    setSliderWidth(slide.current.clientWidth);
  }, []);

  const updateSize = () => {
    setSliderWidth(slide.current.clientWidth);
  };

  return (
    <section className="section" id="m-map">
      <div className="container">
        <Title>Mind map</Title>
        <div className={styles.sliderWrapper}>
          <ul
            className={styles.list}
            onMouseDown={swipeStart}
            onMouseUp={swipeEnd}
            onTouchStart={swipeStart}
            onTouchEnd={swipeEnd}
            style={{ transform: `translateX(-${translate}px)` }}
            ref={slider}
          >
            <li className={styles.card} ref={slide}>
              <p className={styles.text}>
                All owners of APE NFTs and all future collections will receive a
                percentage of sales based on the number of NFTs they own
              </p>
              <h3 className={styles.cardTitle}>Yape drop</h3>
            </li>
            <li className={styles.card}>
              <p className={styles.text}>
                Launch of the 2nd YACHT Collection Releasing the first version
                of the Ape Slam Game
              </p>
              <h3 className={styles.cardTitle}>New Collection</h3>
            </li>
            <li className={styles.card}>
              <p className={styles.text}>
                Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it
              </p>
              <h3 className={styles.cardTitle}>Token</h3>
            </li>
            <li className={styles.cardActive}>
              <a
                className={styles.card}
                href="https://www.google.com.ua/?hl=uk"
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
                <h3 className={styles.cardTitle}>
                  Learn <br /> more <br /> in mind map
                </h3>
              </a>
            </li>
          </ul>
          <div className={styles.btnWrapper}>
            <button
              className={styles.btn}
              onClick={() => setCurrentSlide((prev) => prev - 1)}
              disabled={currentSlid <= 0}
            >
              Prev
            </button>
            <button
              className={styles.btn}
              onClick={() => setCurrentSlide((prev) => prev + 1)}
              disabled={currentSlid >= slideAmount - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindMap;
