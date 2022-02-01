import React from "react";
import { Star } from "../star/Star";
import './Reacting.css'

export type valueActiveStar = number | 0 | 1 | 2 | 3 | 4 | 5;


export type reactingType = {
  value: valueActiveStar
  changeValueStar: (value: valueActiveStar) => any
}

export const Reacting:React.FC<reactingType> = ({value, changeValueStar}) => {
  return (
    <div className="reacting">  
        <Star selected={value > 0}/> <button className="button" onClick={ ()=> changeValueStar(1)}>1</button>
        <Star selected={value > 1}/> <button className="button" onClick={ ()=> changeValueStar(2)}>2</button>
        <Star selected={value > 2}/> <button className="button" onClick={ ()=> changeValueStar(3)}>3</button>
        <Star selected={value > 3}/> <button className="button" onClick={ ()=> changeValueStar(4)}>4</button>
        <Star selected={value > 4}/> <button className="button" onClick={ ()=> changeValueStar(5)}>5</button>
    </div>
  );
}