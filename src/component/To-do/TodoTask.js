import React, { useEffect, useState } from 'react';
import { AiOutlineEdit} from 'react-icons/ai';
import { AiFillDelete} from 'react-icons/ai';
import useTodo from '../../hooks/useTodo';

const TodoTask = () => {
    const [todos,setTodos] = useTodo([]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            const url = `http://localhost:5000/todos/${id}`;
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remaining = todos.filter((todo) => todo._id !== id);
                setTodos(remaining);
              }
            });

        }
    }

    return (
        <div class="mt-5 overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Task name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <th>
                {
                    todos && todos.length ? '' : 'No task....'
                }
                </th>
                {
                    todos.map(todo =>
                        <tbody key={todo.id}>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" class="checkbox" />
                                    </label>
                                </th>
                                <th> 
                                    <h1>{todo.name}</h1>
                                </th>
                                <th>
                                   <button> < AiOutlineEdit/></button>
                                </th>
                                <th>
                                    <button className='w-100' onClick={() => handleDelete(todos._id)}><AiFillDelete/></button>
                                </th>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default TodoTask;