import { useState } from 'react';
import './App.css';
import IntroductionPage from './Pages/IntroductionPage';
import StatsPage from './Pages/StatsPage';

function App() {
  const [indepthView, setIndepthView] = useState(false);

  const handleIndepthViewToggle = () => {
    setIndepthView(!indepthView);
  }

  return(
    <div className='App'>
      {indepthView? 
      <StatsPage viewToggle={handleIndepthViewToggle} />:
      <IntroductionPage viewToggle={handleIndepthViewToggle} />}
    </div>
  );
}

export default App;
