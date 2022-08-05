import Checkbox from '@mui/material/Checkbox';
import { useSelector ,useDispatch} from 'react-redux';
import { initialTodo ,isChecked} from '../../../features/todoAppSlice';

export default function CheckboxInput({list,index,id}) {
    let initialList = useSelector(initialTodo);
    let itemIndex = null
    const itemTitle = list[index].title
    for (let i = 0; i < initialList.length;i++){
      if(initialList[i].title === itemTitle){
        itemIndex = i
      }
    }
    const dispatch = useDispatch()
    return (
        <Checkbox checked={list[index].completed} id={id} onClick={(e) => {
            dispatch(isChecked([itemIndex,e.target.checked]));
        }}/>
    )
}
