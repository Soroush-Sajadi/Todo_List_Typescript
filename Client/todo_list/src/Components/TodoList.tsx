import React, {useEffect, useState, useRef, Key} from 'react';
import {TodoM, Checked} from '../types'
import './TodoList.css'


interface TodoListItemProps {
    todo: TodoM;
    checkedTask: any;
    deletedTask: any;
}

const TodoList: React.FC<TodoListItemProps> = ({todo, checkedTask, deletedTask}) => {

    const taskIsDone = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        let attr = target.getAttribute("id");
        checkedTask(attr)
    }

    const taskIsDeleted = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        let attr = target.getAttribute("id");
        deletedTask(attr)
    }

    // const [currentValue, setCurrentValue] = useState<string | null>(() =>
    // (localStorage.getItem('Todos'))
    // );
    // const [ parseCurrentValue, setParseCurrentValue ] = useState<TodoM>();
    // const didMountRef = useRef<boolean>(false)

    // const saveInLocalStorage = () => {
    //     if (currentValue !== null) {
    //         setParseCurrentValue(JSON.parse(currentValue))
    //     }
    //     localStorage.setItem('Todos', JSON.stringify(todo));
    // }
    // useEffect(() => {
    //     if (todo[0].text !== parseCurrentValue[0].text) {
    //         saveInLocalStorage()
    //     } else didMountRef.current = true
    //   },[])

    // useEffect(() => {
    //     // saveInLocalStorage()
    // },[])
    return(
        <div className="todo-list-card">
            <h3>{todo.text}</h3>
            <div className="todo-list-card-right">
                <input id={`${todo.id}`} className="todo-list-card-checkbox" type="checkbox" value={`${todo.complete}`} onClick={taskIsDone}/>
                <h5 id={`${todo.id}`} onClick={taskIsDeleted}>delete</h5>
            </div>
        </div>
    )
}

export default TodoList;