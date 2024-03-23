import arts from './arts';
import Title from '../Title/Title';
import ArtCard from './ArtCard/ArtCard';
import { Slide, Slider } from '../Slider/Slider';
import { useEffect, useState } from 'react';

const Arts = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, seIsDesktop] = useState(false);

  useEffect(() => {
    setMedia();
  }, []);
  useEffect(() => {
    window.addEventListener('resize', setMedia);
    return () => window.removeEventListener('resize', setMedia);
  }, []);

  const setMedia = () => {
    setIsMobile(window.matchMedia('(max-width: 767.98px)').matches);
    setIsTablet(
      window.matchMedia('(min-width: 768px) and (max-width: 1279.98px)')
        .matches,
    );
    seIsDesktop(window.matchMedia('(min-width: 1280px)').matches);
  };

  return (
    <section className="section">
      <div className="container">
        <Title>COLLECTION</Title>

        {isMobile && (
          <Slider gap={24} visibleAmountSlide={1}>
            {arts.map((art, id) => (
              <Slide key={art}>
                <ArtCard art={art} id={id} />
              </Slide>
            ))}
          </Slider>
        )}
        {isTablet && (
          <Slider gap={24} visibleAmountSlide={2}>
            {arts.map((art, id) => (
              <Slide key={art}>
                <ArtCard art={art} id={id} />
              </Slide>
            ))}
          </Slider>
        )}
        {isDesktop && (
          <Slider gap={24} visibleAmountSlide={4}>
            {arts.map((art, id) => (
              <Slide key={art}>
                <ArtCard art={art} id={id} />
              </Slide>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default Arts;
