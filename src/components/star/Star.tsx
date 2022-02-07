import React from 'react';
import './Star.css'

export type starType = {
  selected: Boolean
  onClick: () => void
}

export const Star:React.FC<starType> = ({selected, onClick}) => {
  const isClassActive = selected ? "star star--active" : "star";
  return (
    <div className={isClassActive} onClick={onClick}>
        Star
    </div>
  );
}