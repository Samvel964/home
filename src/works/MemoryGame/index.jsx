import "./style.scss";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";
import img4 from "./images/image4.jpg";
import img5 from "./images/image5.jpg";
import img6 from "./images/image6.jpg";
import img7 from "./images/image7.jpg";
import img8 from "./images/image8.jpg";
import closed from "./images/black.jpg";

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

const opened = [];
const correct = [];

function shuffel() {
  return array.sort((a, b) => 0.5 - Math.random());
}
shuffel();

export default function MemoryGame() {
  const [memory, setMemory] = useState(shuffel);
  const [className, setClassName] = useState("item ");
  const [num, setNum] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      memory.forEach((item) => (item.state = "closed"));
      setMemory([...memory]);
    }, 2000);
    // eslint-disable-next-line
  }, [num]);

  function onClickHandler(e, item) {
    item.state = "opened";
    e.target.className = "item disabled";
    opened.push(item);
    setMemory([...memory]);

    // In case of coincindence

    if (opened.length === 2 && opened[0].image === opened[1].image) {
      opened.forEach((item) => correct.push(item));
      correct.forEach((item) => (item.correct = true));
      opened.length = 0;
    }
    // In case of incoincindence

    if (opened.length >= 2) {
      setClassName("item disabled");
      setTimeout(() => {
        opened.forEach((item) => (item.state = "closed"));
        opened.length = 0;
        setMemory([...memory]);
        setClassName("item ");
      }, 1500);
    }
    // In case of win
    if (correct.length === 16) {
      Swal.fire({
        title: "You win",
        text: "Play again",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          shuffel();
          correct.forEach((item) => (item.correct = false));
          correct.length = 0;
          setNum(num + 1);
          setMemory(shuffel);
        }
      });
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
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "contain",
                    }
                  : { backgroundImage: `url(${closed})` }
              }
              onClick={(e) => onClickHandler(e, item, index)}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
