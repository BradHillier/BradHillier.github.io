import NavigationBar from './nav.js';
import Home from './home.js';
import Interests from './interests/interests.js';
import About from './about.js';
import Projects, { ProjectTitle } from './projects/projects.js';
import Contact from './contact.js';
import Footer from './footer.js';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faNetworkWired, faServer, faMicrochip } from '@fortawesome/free-solid-svg-icons';

library.add(faNetworkWired, faServer, faMicrochip);


const App = () => {
  return (
    <div className="App">

      <NavigationBar />

      <main>
        <Home />
        <Interests />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />

    </div>
  );
};

export default App;