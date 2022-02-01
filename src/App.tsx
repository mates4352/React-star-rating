import { useState } from 'react';
import './App.css';
import { Reacting, valueActiveStar } from './components/reacting/Reacting';

export const App = () => {
  const [valueStar, setValueStar] = useState<valueActiveStar>(0);
  const changeValueStar = (value: valueActiveStar) => {
    setValueStar(value)
  }

  return (
    <div className='app'>
          <Reacting value={valueStar} changeValueStar={changeValueStar}/>
    </div>
  );
}