import React, { useState } from 'react';
import TodoList from './TodoList'
import { TodoM } from '../types';
import './MakeNewTodo.css';

// interface TodoListItemProps {
//     todo: Todo;
// }

const MakeNewTodo = () => {
    const [newTodo,  setNewTodo] = useState<string>('');
    const [complete, setComplete ] = useState<boolean>(false)
    const [data, setData] = useState<Array<TodoM>>([]);
    
    const addNewTodo =async () => {
        if (newTodo !== '') {
            data.push({text:newTodo, complete: complete});
            setData( () =>data)
            setNewTodo('');

        }
    }
    return(
        <div className="make-new-todo-wrapper">
            <input className="make-new-todo-input" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} type="text" placeholder="New Todo" />
            <input className="make-new-todo-button" onClick={addNewTodo} type="submit" value="Add"   />
            {data.map((item, i) => <TodoList key={i} todo={item}/>)}
        </div>
    )
}

export default MakeNewTodo;