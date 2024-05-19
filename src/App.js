import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GreetingSection from './components/GreetingSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Companies from './components/Companies';
import ContactUs from './components/ContactUs';
import CopyRight from './components/CopyRight';

function App() {
  return (
    <>
      <Header />
      <GreetingSection />
      <About />
      <Skills />
      <Projects />
      <Companies />
      <ContactUs />
      <CopyRight />
    </>
  );
}

export default App;
