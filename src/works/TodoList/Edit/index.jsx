import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch,useSelector } from 'react-redux';
import { deleteTodo,editTodo,initialTodo} from '../../../features/todoAppSlice';
import Swal from 'sweetalert2'


export default function EditDelete({list, index}) {

    const dispatch = useDispatch();
    const initialList = useSelector(initialTodo);
    function editTodoFunc(){      
      let itemIndex = null;
      const itemTitle = list[index].title;
      for (let i = 0; i < initialList.length;i++){

        if(initialList[i].title === itemTitle){
          itemIndex = i;
        }
      }
        Swal.fire({
            title: 'Enter editing text',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            inputValue:initialList[itemIndex].title,
            confirmButtonText: 'Save',
          }).then((result) => {
            if (result.isConfirmed && result.value) {
                dispatch(editTodo({itemIndex,result:result.value}))
           
            }
          });
    }
    function deleteTodoFunc() {

      let itemIndex = null
      const itemTitle = list[index].title
      for (let i = 0; i < initialList.length;i++){

        if(initialList[i].title === itemTitle){
          itemIndex = i
        }
      }      
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteTodo(itemIndex))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          });
    }
    return (
        <Stack direction="row" spacing={1}>
            <IconButton aria-label="edit" onClick={() => {editTodoFunc()}} sx={{'&:active':{color:'red'}}}>
                 <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={()=>{deleteTodoFunc()}} sx={{'&:active':{color:'red'}}}>
                <DeleteIcon />
            </IconButton>
        </Stack>
    )
}
