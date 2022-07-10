import { useForm } from "react-hook-form";
import { RecoilState, useSetRecoilState } from "recoil";
import { toDoState } from "../atom";

interface IForm{
    toDo: string;
}


function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const handleValid = ({toDo}:IForm) =>{
        setToDos((oldToDos)=>[ ...oldToDos,{id: Date.now(), text:toDo, category:"To_Do"}]);
        setValue("toDo","");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("toDo", {required: "todo required"})} placeholder="Write a to do"></input>
            <button>Add</button>
        </form>
    );
}
export default CreateToDo;