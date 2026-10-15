import React, { useState, useEffect } from 'react';
import Accueil from './components/Accueil';
import Menu from './components/Menu';
import Reserver from './components/Reserver';

function App() {
  const [currentPage, setCurrentPage] = useState('accueil');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      {currentPage === 'accueil' && (
        <Accueil 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
      {currentPage === 'menu' && (
        <Menu 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
      {currentPage === 'reserver' && (
        <Reserver 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
    </div>
  );
}

export default App;