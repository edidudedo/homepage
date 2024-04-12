import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components';
import { Home, AboutMe, Footer, Achievements, Research, Projects } from './Containers';

function App() {
  return (
    <div clasName = "App">
      <div className = "gradient__bg">
        <Navbar />
        <Home />
      </div>
      <AboutMe />
      <Achievements />
      <Research />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
