import './style.scss';
import { useSelector } from 'react-redux';
import { initialTodo, number } from '../../../features/todoApp/todoAppSlice';
import IconButton from '@mui/material/IconButton';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import { useDispatch } from 'react-redux';
import { clearCompleted } from '../../../features/todoApp/todoAppSlice';


export default function Counter() {
    const list = useSelector(initialTodo)
    let num = useSelector(number)
    const dispatch = useDispatch()
    return (
        <div className='counter'>
                completed {num} / {list.length}
            <IconButton aria-label="delete" sx={{marginLeft:'auto'}} title="Clear all completed" onClick={() => dispatch(clearCompleted())}>
                <DeleteSweepRoundedIcon />
            </IconButton>
        </div>
    )
}