import React from 'react';
import {Todo} from '../types'


interface TodoListItemProps {
    todo: Todo;
}

const TodoList: React.FC<TodoListItemProps> = ({todo}) => {
    console.log(todo)
    return(
        <div>
        </div>
    )
}

export default TodoList;