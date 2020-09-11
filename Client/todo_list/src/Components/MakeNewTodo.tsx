import React, { useState } from 'react';
import TodoList from './TodoList'
import { Todo } from '../types';



const MakeNewTodo = () => {
    const [newTodo,  setNewTodo] = useState<string>('');
    const [complete, setComplete ] = useState<boolean>(false)
    const [readyToAddNewTodo, setReadyToAddNewTodo]  = useState<boolean>(false)
    const getNewTodo = (e: React.ChangeEvent<HTMLInputElement>): void  => {
        setNewTodo(e.target.value)
    }
    const addNewTodo = () => {
        setReadyToAddNewTodo(!readyToAddNewTodo)
    }
    return(
        <div>
            <input type="text" placeholder="New Todo" onChange={getNewTodo}/>
            <input type="submit" value="Add" onClick={addNewTodo}/>
            {readyToAddNewTodo ? 
                <TodoList todo={{text:newTodo, complete: complete}} />
                :
                null
            }
        </div>
    )
}

export default MakeNewTodo;