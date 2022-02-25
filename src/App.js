import { useState } from 'react';
import './App.css';
import IntroductionPage from './Pages/IntroductionPage';
import Searchbar from './Components/Searchbar';
import StatsPage from './Pages/StatsPage';

function App() {
  const [indepthView, setIndepthView] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const handleIndepthViewToggle = () => {
    setIndepthView(!indepthView);
  }
  
  const handleSetView = value => {
    setIndepthView(value)
  }

  const handlePokemonChange = (newPokemon) => {
    setPokemon(newPokemon);
  }

  return(
    <div className='App'>
      <Searchbar changePokemon={handlePokemonChange} setView={handleSetView}/>
      {indepthView? 
      <StatsPage pokemon={pokemon} viewToggle={handleIndepthViewToggle} />:
      <IntroductionPage viewToggle={handleIndepthViewToggle} changePokemon={handlePokemonChange} />}
    </div>
  );
}

export default App;
