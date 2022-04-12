import {useState} from 'react';
import './App.css';
import {Accordion} from './components/accordion/Accordion'
import {Reacting, valueActiveStar} from './components/reacting/Reacting';
import {Select} from './components/select/Select';

export const App = () => {
   const options: Array<string> = ['yes', 'no', 'yes_no']
   const [selectValue, setSelectValue] = useState<string>(options[0])

   const [valueStar, setValueStar] = useState<valueActiveStar>(0);
   const [stateAccordion, setStateccordion] = useState<boolean>(false);
   const changeValueStar = (value: valueActiveStar) => {
      setValueStar(value)
   }
   return (
       <div className='app'>
          <Reacting value={valueStar} changeValueStar={changeValueStar}/>
          <Accordion isShowAccordion={stateAccordion} onClick={() => setStateccordion(!stateAccordion)}/>
          <Select value={selectValue} options={options} setSelectValue={setSelectValue}/>
       </div>
   );
}
