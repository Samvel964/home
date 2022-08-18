import "./style.scss";
import BigCard from "../../components/Card";
import ticTacToeImg from "../../images/tic-tac-toe-imageq.png";
import todoListImg from "../../images/todo-list.png";
import memoryGameImg from "../../images/memory_game2.png";
import calculator from '../../images/calculator3.png';
import weather from '../../images/weather.png';
import { useNavigate } from "react-router-dom";

export default function MyWorks() {
  const navigate = useNavigate();
  return (
    <div className="my-works container">
      <div className="sss">
        <div onClick={() => navigate("/my-works/tic-tac-toe")}>
          <BigCard
            title="Tic Tac Toe"
            description={
              "A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses."
            }
            img={ticTacToeImg}
          />
        </div>
        <div onClick={() => navigate("/my-works/todo")}>
          <BigCard
            title="Todo List"
            description={
              "It's a list of tasks you need to complete or things that you want to do."
            }
            img={todoListImg}
          />
        </div>
        <div onClick={() => navigate("/my-works/memory-game")}>
          <BigCard
            title="Memory game"
            description={
              "Play a fun, free memory matching game in your web browser "
            }
            img={memoryGameImg}
          />
        </div>
        <div onClick={() => navigate("/my-works/calculator")}>
          <BigCard
            title="Calculator"
            description={
              "A handy tool that can be used all the time you need to do  some matematical calculations. Easy to use, always avaliable"
            }
            img={calculator}
          />
        </div>
        <div onClick={() => navigate('/my-works/weather')}>
          <BigCard
            title="Weather in world"
            description={
              "You can search your city and track the weather"
            }
            img={weather}
          />
        </div>
        {/* <div>
          <button onClick={() => navigate('/my-works/weather')}>Weather</button>
        </div> */}
      </div>
    </div>
  );
}
