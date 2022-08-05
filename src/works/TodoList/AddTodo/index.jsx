import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addTodo } from '../../../features/todoAppSlice';
import { useDispatch } from 'react-redux';

export default function AddTodo() {
    const dispatch = useDispatch()
    return (
        <Box
            onSubmit={(e) => {
                e.preventDefault()
                e.target[0].value.trim() &&
                dispatch(addTodo(e.target[0].value))
                e.target[0].value = ""
            }} 
            sx={{
            display:'flex',
            alignItems:'center'
        }}
            component="form"
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-multiline-flexible"
                label="Add todo"
            />

            <IconButton type="submit">
                <AddCircleIcon />
            </IconButton>
        </Box>        
    )
}
