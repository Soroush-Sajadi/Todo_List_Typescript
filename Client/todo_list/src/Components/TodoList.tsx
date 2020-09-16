import React, {useEffect, useState, useRef, Key} from 'react';
import {TodoM} from '../types'
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

    return(
        <div className="todo-list-card">
            <h3 style={todo.complete ? { textDecorationLine: 'line-through'}:{textDecorationLine: 'none'}  }>{todo.text}</h3>
            <div className="todo-list-card-right">
                <input id={`${todo.id}`} className="todo-list-card-checkbox" type="checkbox" checked={todo.complete} value={`${todo.complete}`} onClick={taskIsDone}/>
                <h5 id={`${todo.id}`} onClick={taskIsDeleted}>delete</h5>
            </div>
        </div>
    )
}

export default TodoList;