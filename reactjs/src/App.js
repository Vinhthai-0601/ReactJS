import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Introduce from './components/Introduce';
import Header from './components/header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Introduce/>
    <About/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
