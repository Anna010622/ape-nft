import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

import './styles/styles.scss';
import About from './components/About/About';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
      </main>

      <Footer />
    </>
  );
};

export default App;
