import { ItoDo } from "../atom";

function ToDo({text, category, id}:ItoDo){
    return (
        <li> {text} </li>
    )
}

export default ToDo;