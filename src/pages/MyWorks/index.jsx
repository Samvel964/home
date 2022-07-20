import "./style.scss";
import BigCard from "../../components/Card";
import ticTacToeImg from "../../images/tic-tac-toe-imageq.png";
import todoListImg from "../../images/todo-list.png";
import { useNavigate } from "react-router-dom";

export default function MyWorks() {
  const navigate = useNavigate();
  return (
    <div className="my-works container">
      <div onClick={() => navigate("/my-works/tic-tac-toe")}>
        
        <BigCard
          title="Tic Tac Toe"
          description={"sa im havaqc xaxn e"}
          img={ticTacToeImg}
        />
      </div>
      <div onClick={() => navigate("/my-works/todo")}>
        <BigCard
          title="Todo List"
          description={"shat ogtakar app"}
          img={todoListImg}
        />
      </div>
    </div>
  );
}
