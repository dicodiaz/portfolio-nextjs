import { FC } from 'react';
import Header from './sections/Header';
import Headline from './sections/Headline';
import Portfolio from './sections/Portfolio';

const App: FC = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Headline />
        <Portfolio />
      </main>
    </>
  );
};

export default App;
