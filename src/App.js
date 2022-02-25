import { useState } from 'react';
import './App.css';
import IntroductionPage from './Pages/IntroductionPage';
import StatsPage from './Pages/StatsPage';

function App() {
  const [indepthView, setIndepthView] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const handleIndepthViewToggle = () => {
    setIndepthView(!indepthView);
  }

  const handlePokemonChange = (newPokemon) => {
    setPokemon(newPokemon);
  }

  return(
    <div className='App'>
      {indepthView? 
      <StatsPage pokemon={pokemon} viewToggle={handleIndepthViewToggle} />:
      <IntroductionPage viewToggle={handleIndepthViewToggle} changePokemon={handlePokemonChange} />}
    </div>
  );
}

export default App;
