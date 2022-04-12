import React, {useState} from "react";
import {
   KeyboardEvent
} from "../../../../../Program Files/JetBrains/WebStorm 2021.3.1/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";
import s from './Select.module.css';
type selectType = {
   value: string
   options: Array<string>
   setSelectValue: (value: string) => void
};

export const Select: React.FC<selectType> = (
    {value, options, setSelectValue}
) => {

   const [isShowList, setIsShowList] = useState<boolean>(false)
   const showList = () => setIsShowList(!isShowList)
   const changeValue = (value: string) => setSelectValue(value)
   const changeArrowUpDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if(e.key === 'ArrowDown' || e.key === 'ArrowUp') setIsShowList(true);
   }
   const changeArrowUpDownOption = (e: KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      inputRef.current.focus()

      if(e.key === 'ArrowDown') {
         if(options[options.indexOf(value) + 1] === undefined) {
            setSelectValue(options[options.indexOf(value)])
         }
         else setSelectValue(options[options.indexOf(value) + 1])
      }

      if(e.key === 'ArrowUp') {
         if(options[options.indexOf(value) - 1] === undefined) {
            setSelectValue(options[options.indexOf(value)])
         }
         else setSelectValue(options[options.indexOf(value) - 1])
      }

      if(e.key === 'Enter') {
         setIsShowList(!isShowList)
      }
   }
   const getClassHover = (option: string) => {
      return option === value ? s.inputHover : '';
   }
   const inputRef = React.createRef<any>();
   return (
       <>
          <input className={s.input} type='text' value={value} onClick={showList} ref={inputRef}
                 onKeyUp={changeArrowUpDownOption}/>

          {isShowList &&
             <ul tabIndex={0} >
                {
                   options.map((option, index) =>
                       <li key={index}>
                          <input
                              className={`${s.input} ${getClassHover(option)}`}
                              type='button'
                              onClick={() => changeValue(option)} value={option}
                              onKeyUp={changeArrowUpDownOption}/>
                       </li>
                   )
                }
             </ul>

          }
       </>
   );
};
