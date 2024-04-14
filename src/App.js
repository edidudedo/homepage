import logo from './logo.svg';
import './App.css';
import { Navbar, TopButton } from './Components';
import { Home, AboutMe, Footer, Achievements, Research, Projects, Collabs, Education, Employment } from './Containers';

function App() {
  return (
    <div clasName = "App">
      <TopButton />
      <div className = "gradient__bg">
        <Navbar />
        <Home />
      </div>
      <AboutMe />
      <Education />
      <Employment />
      <Achievements />
      <Research />
      <Projects />
      <Collabs />
      <Footer />
    </div>
  );
}

export default App;
