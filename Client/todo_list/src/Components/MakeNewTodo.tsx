import React, { useState, Children, useEffect } from 'react';
import TodoList from './TodoList'
import { TodoM } from '../types';
import './MakeNewTodo.css';


const MakeNewTodo = () => {
    const [newTodo,  setNewTodo] = useState<string>('');
    const [complete, setComplete ] = useState<boolean>(false)
    const [data, setData] = useState<Array<TodoM>>([]);

    const TaskIsDone = (id: string) => {
        data.map(item => {
            if (item.id === Number(id)) {
                item.complete = !item.complete;
                setData(data => [...data])
                localStorage.setItem('data', JSON.stringify(data))
            }
        })
    }

    const TaskIsDeleted = (id:string) => {
        data.map((item, i) => {
            if(item.id === Number(id)) {
                data.splice(i, 1)
                setData(data => [...data])
                localStorage.setItem('data', JSON.stringify(data))
            }
        })
    }

    const getCheckedTaskId:any = (childData: string) => {
        TaskIsDone(childData)
    }

    const getDeletedTaskId: any = (childData: string) => {
        TaskIsDeleted(childData)
    }

    const addNewTodo =async () => {
        if (newTodo !== '') {
            data.push({text:newTodo, complete: complete, id:Math.floor(Math.random() * 100000000000)});
            localStorage.setItem('data', JSON.stringify(data))
            setData((data) => [...data])
            setNewTodo('');
        }
    }
    useEffect(() => {
        if (localStorage.getItem('data') !== null) {
            setData(JSON.parse(`${localStorage.getItem('data')}`))
        }
    },[])

    return(
        <div className="make-new-todo-wrapper">
            <input className="make-new-todo-input" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} type="text" placeholder="New Todo" />
            <input className="make-new-todo-button" onClick={addNewTodo} type="submit" value="Add" />
            <div className="todo-list-wrapper">
                {data.map((item, i) => <TodoList key={i} todo={item} checkedTask={getCheckedTaskId} deletedTask={getDeletedTaskId}/>)}
            </div>
        </div>
    )
}

export default MakeNewTodo;