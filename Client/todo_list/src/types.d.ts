import { type } from "os";

type Todo = [{
    text: string;
    complete: boolean;
    id:number
}]
type TodoM ={
    text: string;
    complete: boolean;
    id:number
}
type Checked = {
    getCheckedTask: () => any
}