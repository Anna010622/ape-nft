import { useState, useRef, useEffect } from 'react';
import styles from './slider.module.scss';

export const Slider = ({ children, gap = 24, visibleAmountSlide = 1 }) => {
  const [slideWidth, setSlideWidth] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlideAmount, setTotalSlideAmount] = useState();
  const [x1, setX1] = useState(0);

  const slider = useRef(null);

  let translate = slideWidth * currentSlide;
  if (translate > 0) {
    translate = translate + gap * currentSlide;
  }

  const swipeStart = (e) => {
    const xCoordinate = e.pageX || e.changedTouches[0].pageX;
    setX1(xCoordinate);
  };

  const swipeEnd = (e) => {
    const xCoordinate = e.pageX || e.changedTouches[0].pageX;
    if (x1 < xCoordinate && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
    if (
      x1 > xCoordinate &&
      currentSlide < totalSlideAmount - visibleAmountSlide
    ) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setTotalSlideAmount(slider.current.children.length);
  }, []);

  useEffect(() => {
    setSlideWidth(
      (slider.current?.clientWidth - gap * (visibleAmountSlide - 1)) /
        visibleAmountSlide,
    );
  }, [gap, visibleAmountSlide]);

  useEffect(() => {
    const updateSize = () => {
      setSlideWidth(
        (slider.current?.clientWidth - gap * (visibleAmountSlide - 1)) /
          visibleAmountSlide,
      );
    };
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [gap, visibleAmountSlide]);

  return (
    <div className={styles.sliderWrapper}>
      <ul
        className={styles.list}
        onMouseDown={swipeStart}
        onMouseUp={swipeEnd}
        onTouchStart={swipeStart}
        onTouchEnd={swipeEnd}
        style={{ transform: `translateX(-${translate}px)`, gap: `${gap}px` }}
        ref={slider}
        onDragStart={(e) => e.preventDefault()}
      >
        {children}
      </ul>

      <div className={styles.btnWrapper}>
        <button
          className={styles.btn}
          onClick={() => setCurrentSlide((prev) => prev - 1)}
          disabled={currentSlide <= 0}
        >
          Prev
        </button>
        <button
          className={styles.btn}
          onClick={() => setCurrentSlide((prev) => prev + 1)}
          disabled={currentSlide >= totalSlideAmount - visibleAmountSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const Slide = ({ children, slideWidth }) => {
  return (
    <li className={styles.item} style={{ minWidth: `${slideWidth}` }}>
      {children}
    </li>
  );
};
