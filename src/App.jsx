import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

import './styles/styles.scss';
import About from './components/About/About';
import MindMap from './components/MindMap/MindMap';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <MindMap />
      </main>

      <Footer />
    </>
  );
};

export default App;
