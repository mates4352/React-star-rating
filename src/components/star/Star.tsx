import React from 'react';
import './Star.css'

export type starType = {
  selected: Boolean
}


export const Star:React.FC<starType> = ({selected}) => {
  const isClassActive = selected ? "star star--active" : "star";
  return (
    <div className={isClassActive}>
        Star
    </div>
  );
}