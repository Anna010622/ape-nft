import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

import './styles/styles.scss';
import About from './components/About/About';
import MindMap from './components/MindMap/MindMap';
import Arts from './components/Arts/Arts';
import FAQ from './components/FAQ/FAQ';
import ContactUs from './components/ContactUs/ContactUs';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <MindMap />
        <FAQ />
        <Arts />
        <ContactUs />
      </main>

      <Footer />
    </>
  );
};

export default App;
