import "./style.scss";
import { useState } from "react";
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";
import img4 from "./images/image4.jpg";
import img5 from "./images/image5.jpg";
import img6 from "./images/image6.jpg";
import img7 from "./images/image7.jpg";
import img8 from "./images/image8.jpg";



const array = [
  {
    image: img1,
    state: "closed",
    correct: false,
  },
  {
    image: img1,
    state: "closed",
    correct: false,
  },
  {
    image: img2,
    state: "closed",
    correct: false,
  },
  {
    image: img2,
    state: "closed",
    correct: false,
  },
  {
    image: img3,
    state: "closed",
    correct: false,
  },
  {
    image: img3,
    state: "closed",
    correct: false,
  },
  {
    image: img4,
    state: "closed",
    correct: false,
  },
  {
    image: img4,
    state: "closed",
    correct: false,
  },
  {
    image: img5,
    state: "closed",
    correct: false,
  },
  {
    image: img5,
    state: "closed",
    correct: false,
  },
  {
    image: img6,
    state: "closed",
    correct: false,
  },
  {
    image: img6,
    state: "closed",
    correct: false,
  },
  {
    image: img7,
    state: "closed",
    correct: false,
  },
  {
    image: img7,
    state: "closed",
    correct: false,
  },
  {
    image: img8,
    state: "closed",
    correct: false,
  },
  {
    image: img8,
    state: "closed",
    correct: false,
  },
]

const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

const opened = [];
const correct = [];


export default function MemoryGame() {
  const [memory, setMemory] = useState(shuffledArray);
  // setMemory([...memory])
  const [className, setClassName] = useState("item");



  

  function onClickHandler(e, item, index) {
    item.state = 'opened'
    e.target.className = 'item disabled'
    opened.push(item)
    setMemory([...memory])    

    if (opened[0].image === opened[1].image) {
      opened.forEach(item => correct.push(item))
      correct.forEach(item => item.correct = true)
      opened.length = 0      
    }else if (opened.length >= 2) {
      setClassName('item disabled')
      setTimeout(() => {
        opened.forEach(item => item.state = 'closed')        
        opened.length = 0
        setMemory([...memory])
        setClassName('item ')
      },1500)
    }

    if (correct.length === 16){
      setTimeout(() => {
        alert('win')
      })
    }    
  }

  return (
    <div className="container">
      <div className="memoryGame ">
        {memory.map((item, index) => {
          return (
            <div
              className={item.correct ? 'item disabled filter' : className}
              style={
                item.state === "opened"
                  ? {
                      background: `url(${item.image})`,
                      backgroundSize: "contain",
                    }
                  : { backgroundColor: "grey" }
              }
              onClick={(e) => onClickHandler(e, item, index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
