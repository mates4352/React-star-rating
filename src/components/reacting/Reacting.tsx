import React from "react";
import { Star } from "../star/Star";
import './Reacting.css'

export type valueActiveStar =  0 | 1 | 2 | 3 | 4 | 5;


export type reactingType = {
  value: valueActiveStar
  changeValueStar: (value: valueActiveStar) => any
}

export const Reacting:React.FC<reactingType> = ({value, changeValueStar}) => {
  return (
    <div className="reacting">  
        <Star selected={value > 0} onClick={()=> changeValueStar(1)}/>
        <Star selected={value > 1} onClick={()=> changeValueStar(2)}/>
        <Star selected={value > 2} onClick={()=> changeValueStar(3)}/>
        <Star selected={value > 3} onClick={()=> changeValueStar(4)}/>
        <Star selected={value > 4} onClick={()=> changeValueStar(5)}/>
    </div>
  );
}