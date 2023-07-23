import React, { useState } from 'react';
import './App.css';

const App = () => {
  // État local pour suivre le mode actuel (nuit ou jour)
  const [isNightMode, setIsNightMode] = useState(false);

  // Fonction pour basculer entre le mode nuit et le mode jour
  const toggleMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  // Appliquer la classe CSS en fonction du mode actuel
  const containerClassName = isNightMode ? 'night-mode' : 'day-mode';

  return (
    <div className={containerClassName}>
      <h1>Mode Nuit et Mode Jour</h1>
      <p>Cliquez sur le bouton pour basculer entre les modes.</p>
      <button onClick={toggleMode}>Basculer le Mode</button>
    </div>
  );
};

export default App;
