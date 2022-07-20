// import { addTodo,deleteTodo, editTodo, searchTodo, clearComplited, initialTodo } from "./todoAppSlice";
import { useSelector } from "react-redux";
import './style.scss';
// import Checkbox from "../../components/Checkbox";
import Checkbox from '../../works/TodoList/Checkbox/index';
// import EditDelete from "../../components/Edit";
import EditDelete from '../../works/TodoList/Edit/index';
// import AddTodo from "../../components/AddTodo";
import AddTodo from '../../works/TodoList/AddTodo/index';
// import Counter from "../../components/Counter";
import Counter from '../../works/TodoList/Counter/index';
// import SearchTodo from "../../components/SearchTodo";
import SearchTodo from '../../works/TodoList/SearchTodo/index';
import { searchSystem } from "./todoAppSlice";


export default function TodoApp() {

    const list = useSelector(searchSystem)    

    return (
        <div className="todo-app ">
            <div className="todo-header">
                <SearchTodo />
                <AddTodo />
            </div>
            {list.map((item,index) => {
                return(
                    <div key={item.title+"-" + index} className='todo-item'>
                        <div className="check-title">
                            <Checkbox list={list} index={index} />
                            {item.completed ? <span><del>{item.title}</del></span> : <span>{item.title}</span>}
                        </div>
                        <EditDelete list={list} index={index}/>
                    </div>
                )
            })}

            <Counter />
        </div>
      
    )
}