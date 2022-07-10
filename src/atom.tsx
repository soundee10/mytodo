import { atom, RecoilState } from "recoil";

export interface ItoDo{
    id?: number;
    text: string;
    category?: "To_Do"|"ON_GOING"|"DONE";
}

export const toDoState = atom<ItoDo[]>({
    key: "toDo",
    default: []
});