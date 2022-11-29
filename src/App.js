import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skill from './components/Skill';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Skill />
<Project />
<Contact />

    <SocialLinks />
   </>
   
  );
}

export default App;
