import { Metadata } from 'next';
import { FC } from 'react';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Headline from './sections/Headline';
import Portfolio from './sections/Portfolio';
import Skills from './sections/Skills';

export const metadata: Metadata = {
  title: 'Dico Diaz - Portfolio',
  description:
    "Hey there, I'm Dico. I am a Software Developer. I can help you build a product, feature, or website. Please look through some of my work and experience. If you like what you see and have a project you need to be coded, don't hesitate to contact me.",
  openGraph: {
    type: 'website',
    url: 'https://portfolio-nextjs.dicodiaz.com.co/',
    title: 'Dico Diaz - Portfolio',
    description:
      "Hey there, I'm Dico. I am a Software Developer. I can help you build a product, feature, or website. Please look through some of my work and experience. If you like what you see and have a project you need to be coded, don't hesitate to contact me.",
    siteName: 'Dico Diaz - Portfolio',
    images: [
      {
        url: 'https://raw.githubusercontent.com/dicodiaz/portfolio-nextjs/refs/heads/main/public/app_screenshot_desktop.png',
      },
    ],
  },
  keywords: [
    'Portfolio',
    'Dico',
    'Diaz',
    'dicodiaz',
    'FullStack',
    'Frontend',
    'Backend',
    'Developer',
    'Software',
    'Engineer',
    'Colombia',
    'React',
    'NextJS',
    'JavaScript',
    'TypeScript',
    'Ruby on Rails',
    'Ruby',
    'GraphQL',
  ],
  authors: [{ name: 'Dico Diaz', url: 'https://github.com/dicodiaz' }],
  creator: 'Dico Diaz',
};

const App: FC = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Headline />
        <Portfolio />
        <AboutMe />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
