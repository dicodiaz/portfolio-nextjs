import { FC } from 'react';
import Header from './sections/Header';
import Headline from './sections/Headline';

const App: FC = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Headline />
      </main>
    </>
  );
};

export default App;
