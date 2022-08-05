import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { searchTodo } from '../../../features/todoAppSlice';

export default function SearchTodo() {
    const dispatch = useDispatch();

    return (        
        <TextField
            id="outlined-multiline-flexible"
            label="Search"
            onChange={(e) => dispatch(searchTodo(e.target.value.toLowerCase()))}
            className='search'
        />
    )
}
