import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components';
import { Home, AboutMe, Footer, Achievements, Research, Projects, Collabs, Education } from './Containers';

function App() {
  return (
    <div clasName = "App">
      <div className = "gradient__bg">
        <Navbar />
        <Home />
      </div>
      <AboutMe />
      <Education />
      <Achievements />
      <Research />
      <Projects />
      <Collabs />
      <Footer />
    </div>
  );
}

export default App;
