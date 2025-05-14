import { FC } from 'react';
import AboutMe from './sections/AboutMe';
import Header from './sections/Header';
import Headline from './sections/Headline';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';

const App: FC = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Headline />
        <Portfolio />
        <AboutMe />
        <Skills />
      </main>
    </>
  );
};

export default App;
