import NavigationBar from './nav.js';
import Home from './home.js';
import Interests from './interests.js';
import About from './about.js';
import Projects, { ProjectTitle } from './projects.js';
import Contact from './contact.js';
import Section from './section.js';
import Footer from './footer.js';
import SlideInTitle from './slideInTitle.js';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faNetworkWired, faServer, faMicrochip } from '@fortawesome/free-solid-svg-icons';

library.add(faNetworkWired, faServer, faMicrochip);


const App = () => {
  return (
    <div className="App">

      <NavigationBar />

      <main>
        <Section id="home" className="bg-light">
          <Home />
        </Section>

        <Section id="interests">
          <div className="pb-4">
            <SlideInTitle title="Areas of Interest" />
          </div>
          <Interests />
        </Section>

        <Section id="about">
          <About />
        </Section>

        <Section id="projects" className="bg-light">
          <ProjectTitle />
          <Projects />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </main>

      <Footer />

    </div>
  );
}

export default App;