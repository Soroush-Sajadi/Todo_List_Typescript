import React, {useEffect, useState, useRef, Key} from 'react';
import {TodoM} from '../types'
import './TodoList.css'


interface TodoListItemProps {
    todo: TodoM;
}

const TodoList: React.FC<TodoListItemProps> = ({todo}) => {
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
        <div className="todo-list-wrapper">
            <div className="todo-list-card">
                <h3>{todo.text}</h3>
                <input type="checkbox" value={`${todo.complete}`}/>
            </div>
        </div>
    )
}

export default TodoList;