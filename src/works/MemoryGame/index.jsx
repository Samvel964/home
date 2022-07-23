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
import black from "./images/black.jpg";
import { useEffect } from "react";

const array = [
  { image: img2, state: "opened", correct: false },
  { image: img1, state: "opened", correct: false },
  { image: img3, state: "opened", correct: false },
  { image: img4, state: "opened", correct: false },
  { image: img5, state: "opened", correct: false },
  { image: img6, state: "opened", correct: false },
  { image: img7, state: "opened", correct: false },
  { image: img8, state: "opened", correct: false },
  { image: img1, state: "opened", correct: false },
  { image: img2, state: "opened", correct: false },
  { image: img3, state: "opened", correct: false },
  { image: img4, state: "opened", correct: false },
  { image: img5, state: "opened", correct: false },
  { image: img6, state: "opened", correct: false },
  { image: img7, state: "opened", correct: false },
  { image: img8, state: "opened", correct: false },
];

let shuffledArray

const opened = [];
const correct = [];

function newGame() {
  shuffledArray = array.sort((a, b) => 0.5 - Math.random());
  correct.length = 0;
}
newGame();

export default function MemoryGame() {
  const [memory, setMemory] = useState(shuffledArray);
  const [className, setClassName] = useState("item");

  useEffect(() => {
    setTimeout(() => {
      memory.forEach(item => item.state = "closed");
      setMemory([...memory]);
    }, 2000);
  }, [shuffledArray]);

  function onClickHandler(e, item, index) {
    item.state = "opened";
    e.target.className = "item disabled";
    opened.push(item);
    setMemory([...memory]);

    if (opened[0].image === opened[1].image) {
      opened.forEach((item) => correct.push(item));
      correct.forEach((item) => (item.correct = true));
      opened.length = 0;
    } else if (opened.length >= 2) {
      setClassName("item disabled");
      setTimeout(() => {
        opened.forEach((item) => (item.state = "closed"));
        opened.length = 0;
        setMemory([...memory]);
        setClassName("item ");
      }, 1500);
    }

    if (correct.length === 16) {
      newGame()     
    }
  }

  return (
    <div className="container">
      <div className="memoryGame ">
        {memory.map((item, index) => {
          return (
            <div
              className={item.correct ? "item disabled filter" : className}
              style={
                item.state === "opened"
                  ? {
                      background: `url(${item.image})`,
                      backgroundSize: "contain",
                    }
                  : { background: `url(${black})` }
              }
              onClick={(e) => onClickHandler(e, item, index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
