import React, { useState } from "react";
import { useForm } from "react-hook-form";


function TodoList(){
    const {register, handleSubmit, watch} = useForm();
    return(
        <form onSubmit={handleSubmit((data)=>{console.log(data);})}>
            <input {...register("toDo")} placeholder="write to do">
            </input>
            <button>add</button>
        </form>
    );
}

export default TodoList;