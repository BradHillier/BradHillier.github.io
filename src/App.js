import NavigationBar from './nav.js';
import Home from './home.js';
import Interests from './interests.js';
import About from './about.js';
import Projects from './projects.js';
import Contact from './contact.js';
import './App.css';


function App() {

  return (
    <div className="App">

      <NavigationBar />

      <main>
        <section id="home" className="bg-light py-5"> 
          <Home /> 
        </section>

        <section id="interests" className="bg-white py-5"> 
          <Interests /> 
        </section>

        <section id="about" className="bg-white py-5"> 
          <About /> 
        </section>

        <section id="projects" className="bg-white py-5"> 
          <Projects /> 
        </section>

        <section id="contact" className="bg-white py-5"> 
          <Contact /> 
        </section>
      </main>

    </div>
  );
}

export default App;