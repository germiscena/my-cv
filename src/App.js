import './App.scss';
import React from 'react';
import ButtonsSection from './sections/ButtonsSection';
import HeadSection from './sections/HeadSection';
import InformationSection from './sections/InformationSection';
import PortfolioSection from './sections/PortfolioSection';

function App() {
  const [active, setActive] = React.useState('first');

  return (
    <div className='App'>
      <HeadSection />
      <ButtonsSection active={active} setActive={(str) => setActive(str)} />
      {active == 'first' ? <InformationSection /> : <PortfolioSection />}
    </div>
  );
}

export default App;
