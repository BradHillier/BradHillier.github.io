import NavigationBar from './nav.js';
import Header from './header.js';
import Interests from './interests/interests.js';
import About from './about.js';
import Projects, { ProjectTitle } from './projects/projects.js';
import Contact from './contact.js';
import Footer from './footer.js';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faNetworkWired, faServer, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faNetworkWired, faServer, faMicrochip, faGithub);


const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <main>
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