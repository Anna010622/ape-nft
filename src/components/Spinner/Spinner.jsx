import stales from './spiner.module.scss';

const Spinner = () => {
  return (
    <div className={stales.container}>
      <div className={stales.spinner}></div>
    </div>
  );
};

export default Spinner;
