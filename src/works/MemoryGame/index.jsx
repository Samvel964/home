import "./style.scss";
import { useState } from "react";

export default function MemoryGame() {
  const [memory, setMemory] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const concat = memory.concat(memory);
  const [className, setClassName] = useState('item ');
  const opened = []

  function onClickHandler(e,item, index){
    e.target.className = 'item pict';
    opened.push(item)
    if(opened.length >= 2){
    }

    setTimeout(()=>{
      e.target.className = 'item'
    },2000)
  }

  return (
    <div className="container">
      <div className="memoryGame ">
        {concat.map((item, index) => {
          return <div className={className} key={index} onClick={(e)=> onClickHandler(e,item,index)}></div>;
        })}
      </div>
    </div>
  );
}
