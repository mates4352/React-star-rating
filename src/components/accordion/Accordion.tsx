import React from "react";
import './Accordion.css'
export type accordionType = {
  isShowAccordion: boolean
  onClick: () => void
}

export const Accordion:React.FC<accordionType> = ({ isShowAccordion, onClick }) => {
  return (
    <>  
      <h2 className="title" onClick={onClick}>menu</h2>
      { isShowAccordion &&
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      }

    </>
  );
}