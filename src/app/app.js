import NavigationBar from '../components/layouts/navigation/navigation.js';
import Hero from '../features/hero/components/hero/hero.js';
import Projects from '../features/projects/components/projects-section/projects-section.js';
import Footer from '../components/layouts/footer/footer.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faNetworkWired, faServer, faMicrochip, faPlay, faCode, faArrowRight, faDatabase, faScrewdriverWrench, faPlug, faBook, faCodeBranch, faBug } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faNetworkWired, faServer, faMicrochip, faPlay, faCode, faGithub, faLinkedin, faArrowRight, faDatabase, faScrewdriverWrench, faPlug, faBook, faCodeBranch, faBug);


const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;