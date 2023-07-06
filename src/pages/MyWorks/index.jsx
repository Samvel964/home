import "./style.scss";
import BigCard from "../../components/Card";
import ticTacToeImg from "../../images/tic-tac-toe-imageq.png";
import todoListImg from "../../images/todo-list.png";
import memoryGameImg from "../../images/memory_game2.png";
import calculator from '../../images/calculator3.png';
import weather from '../../images/weather.png';
import { useNavigate } from "react-router-dom";
import velvet from '../../images/velvet-main-image.png';
import pizzeria from '../../images/pizzeria.png';
import outStaffPro from '../../images/outstaff-pro.png';

export default function MyWorks() {
  const navigate = useNavigate();

  return (
    <div className="my-works container">
      <h1 className="text-center title">Big Projects</h1>
      <div className="big-projects">
      <a href="https://outstaff-pro.com" target={"_blank"}>
        <div className="big-projects-item">
          <div className="big-projects-item-description">
            <h3>OUTSTAFF PRO</h3>
            <p>"OutStaff Pro" is a real project. It's a platform aimed for specialist exchange. Via this platform companies
              can find specialist they need as well as offer their own ones.
              This is a great solutions for the companies who need temporary developers.</p>
          </div>
            <img src={outStaffPro} alt="outStaffPro" />          
        </div>
        </a>
      <a href="https://samvel964.github.io/velvet" target={"_blank"}>
        <div className="big-projects-item">
          <div className="big-projects-item-description" onClick={() => -1}>
            <h3>Velvet</h3>
            <p>"Velvet" is an online shop. Here you can find clothes, shoes, and acessories of different taste. Users can create their accounts, choose the product, add it in your favourite list and your shop cart list.</p>
          </div>          
          <img src={velvet} alt="velvet" />          
        </div>
      </a>
        <a href="https://samvel964.github.io/luigis" target={"_blank"}>
          <div className="big-projects-item">
            <div className="big-projects-item-description">
              <h3>Pizzeria Luigi's</h3>
              <p>This is "Pizzeria Luigi's" web page, were you can find all the products available, choose whatever you want and order it.</p>
            </div>
              <img src={pizzeria} alt="pizzeria" />            
          </div>
        </a>
        {/* <a href="https://samvel964.github.io/shop" target={"_blank"}>
        <div className="big-projects-item">
          <div className="big-projects-item-description">
            <h3>Shop</h3>
            <p>This project is for online sale. From the very beginning it was created like list.am. It gives you an opportunity to add products. By using different filters you may find whatever you need very easily. It is very handy</p>
          </div>
            <img src={shopProject} alt="Shoping" />          
        </div>
        </a> */}
        
      </div>
        <h1 className="text-center title">Works & Apps</h1>
      <div className="main_content">
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
