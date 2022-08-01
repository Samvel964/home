import { useSelector } from "react-redux";
import './style.scss';
import Checkbox from '../Checkbox';
import EditDelete from '../Edit';
import AddTodo from '../AddTodo/index';
import Counter from '../Counter';
import SearchTodo from '../SearchTodo';
import { searchSystem } from "../../../features/todoAppSlice";

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
                            <Checkbox list={list} index={index} id={item.title + index}/>
                            {item.completed ? <label for={item.title + index}><del>{item.title}</del></label> : <label  for={item.title + index}>{item.title}</label>}
                        </div>
                        <EditDelete list={list} index={index}/>
                    </div>
                )
            })}

            <Counter />
        </div>
      
    )
}