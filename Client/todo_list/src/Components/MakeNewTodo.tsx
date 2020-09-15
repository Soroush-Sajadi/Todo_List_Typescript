import React, { useState, Children } from 'react';
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
    const [getId, setGetId] = useState<string>('')

    const TaskIsDone = (id: string) => {
        data.map(item => {
            if (item.id === Number(id)) {
                item.complete = !item.complete
            }
        })
    }

    const TaskIsDeleted = (id:string) => {
        data.map((item, i) => {
            if(item.id === Number(id)) {
                data.splice(i, 1)
                setData(data => [...data])
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
            data.push({text:newTodo, complete: complete, id:data.length});
            setData(() =>data)
            setNewTodo('');

        }
    }

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