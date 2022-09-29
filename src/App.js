import { useContext } from 'react';
import './App.css';
import About from './components/about/about';
import Intro from './components/banner/banner';
import Brands from './components/brands/brands';
import Contact from './components/contact/contact';
import PortfoilioList from './components/portfolioList/portfolioList';
import Testimonials from './components/testimonials/testimonials';
import Toggle from './components/toggle/toggle';
import { ThemeContext } from './context';
import Footer from './components/footer/footer';
// import Early from "./song/early.mp3"

function App() {
  const Theme = useContext(ThemeContext)
  const darkMode = Theme.state.darkMode
  return (
    <div className="App" style={{backgroundColor: darkMode ?  "#222" : "white", color: darkMode && "white"}}>
                  {/* <audio src={Early} autoPlay loop></audio> */}
      <Toggle/>
      <Intro/>
      <Brands/>
      <About/>
      <PortfoilioList/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
