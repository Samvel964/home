import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./Layout";
import MyWorks from "./pages/MyWorks";
import TicTacToe from "./works/TicTacToe";
import ErrorPage from "./pages/ErrorPage";
// import TodoApp from './features/todoApp/TodoApp';
import TodoApp from "./works/TodoList/TodoApp/TodoApp";
import ContactMe from "./pages/ContactMe";
import MemoryGame from "./works/MemoryGame";


export default function MyRoutes(){

    return(
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/my-works" element={<MyWorks />} />
                <Route path="/my-works/todo" element={<TodoApp />} />
                <Route path='/my-works/tic-tac-toe' element={<TicTacToe />} />
                <Route path='/my-works/memory-game' element={<MemoryGame />} />

                <Route path='/contact' element={<ContactMe />} />                
            </Route>
            <Route path='*' element={<ErrorPage />} />
     
        </Routes>
    )
}