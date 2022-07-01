import React, { useEffect, useState } from 'react';
import TodoTask from './TodoTask';

const TodoList = () => {
   
    const [newTask, setNewTask] = useState('')
    const [updateData, setUpdateData] = useState('');



    const addTask = () =>{

    }
    const deleteTask = () =>{

    }
    const markDone = () =>{

    }
    const cancelUpdate = () =>{

    }
    const changeTask = () =>{
        
    }
    const updateTask = () =>{

    }
    return (
        <div className='mt-24 text-2xl'>
            {/* 
            {
                todos.map(todo => <TodoTask key={todo.id} todo={todo}></TodoTask>)
            }
           <h1>{todos.title}</h1> */}
        </div>
    );
};

export default TodoList;