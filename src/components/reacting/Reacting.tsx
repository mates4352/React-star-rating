import { Star } from "../star/Star";
import './Reacting.css'

export const Reacting = () => {
  return (
    <div className="reacting">  
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
  );
}