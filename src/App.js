
import './App.css';
import { Home } from './components/Home';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Home />
    <AboutMe />
    <NavBar />
    <Skills />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
