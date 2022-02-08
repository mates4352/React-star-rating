import { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion'
import { Reacting, valueActiveStar } from './components/reacting/Reacting';

export const App = () => {
  const [valueStar, setValueStar] = useState<valueActiveStar>(0);
  const [stateAccordion, setStateccordion] = useState<boolean>(false);
  const changeValueStar = (value: valueActiveStar) => {
    setValueStar(value)
  }
  return (
    <div className='app'>
          <Reacting value={valueStar} changeValueStar={changeValueStar}/>
          <Accordion isShowAccordion={stateAccordion} onClick={() => setStateccordion(!stateAccordion)}/>
    </div>
  );
}