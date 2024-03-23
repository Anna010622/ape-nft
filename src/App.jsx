import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

import './styles/styles.scss';
import About from './components/About/About';
import MindMap from './components/MindMap/MindMap';
import Arts from './components/Arts/Arts';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <MindMap />
        <Arts />
      </main>

      <Footer />
    </>
  );
};

export default App;
