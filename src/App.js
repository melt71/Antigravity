import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SelectedWork from './components/SelectedWork';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = React.useState('dark');

  React.useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Features />
      <SelectedWork />
      <Philosophy />
      <Footer />
    </div>
  );
}

export default App;
