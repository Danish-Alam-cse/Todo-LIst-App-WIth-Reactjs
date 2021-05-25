
const TodoLists = (props) => {
    return(
        <li className="mb-2">
        <button 
         type="button"
         className="delete_btn rounded-circle btn-danger"

         onClick={()=>props.onSelect(props.id)}>X</button>
         {props.text}</li>
    )
    }

export default TodoLists;
