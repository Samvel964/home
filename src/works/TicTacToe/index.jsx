import "./style.scss";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function TicTacToe() {
  const navigate = useNavigate();

  const [gameBody, setGameBody] = useState([
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
    { title: "" },
  ]);

  const [player, setPlayer] = useState("X");
  const [step, setStep] = useState(1);
  const [itemClass, setItemClass] = useState("item ");

  function clickOnItem(item, e) {
    e.target.classList = "item disabled";
    item.title = player;

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
    setStep(step + 1);

    if (step >= 5) {
      checkWinner();
    }
  }

  function checkWinner() {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    function winner(player) {
      Swal.fire({
        title: player ? "Player " + player + " is win" : "Nobody won",
        text: "do you want to play again?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {          
            setGameBody([
              { title: "" },
              { title: "" },
              { title: "" },
              { title: "" },
              { title: "" },
              { title: "" },
              { title: "" },
              { title: "" },
              { title: "" },
            ])        
          setItemClass("item ");
          setStep(1);
          setPlayer("X");
        } else if (result.dismiss) {
          navigate("/my-works");
        }
      });
    }
    for (let i = 0; i < combinations.length; i++) {
      if (
        gameBody[combinations[i][0]].title === player &&
        gameBody[combinations[i][1]].title === player &&
        gameBody[combinations[i][2]].title === player
      ) {
        setItemClass("item disabled");
        winner(player);
        return;
      }
    }
    if (step >= 9) {
     setItemClass("item disabled");
     winner();
   }

    
  }

  return (
    <div className="container">
      <div className="tic-tac-toe-body">
        {gameBody.map((item, index) => {
          return (
            <div
              className={itemClass}
              onClick={(e) => clickOnItem(item, e)}
              key={index}
            >
              {item.title === "X" ? (
                <span className="red">{item.title}</span>
              ) : (
                <span className="blue">{item.title}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
