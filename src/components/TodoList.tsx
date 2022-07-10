import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, RecoilState, useRecoilState } from "recoil";
import { toDoState } from "../atom";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function TodoList(){
    const [todos, setTodos] = useRecoilState(toDoState)

    return(
        <div>
            <h1> To Dos </h1>
            <hr />
            <CreateToDo />
            <ul>
                {
                    todos.map((toDo)=>
                    <ToDo key={toDo.id} {...toDo}/>)
                }
            </ul>
        </div>
    );
}

export default TodoList;