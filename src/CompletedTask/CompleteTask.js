import React from 'react';
import useTodo from '../hooks/useTodo';
import { AiFillDelete } from 'react-icons/ai';

const CompleteTask = () => {
    const [todos, setTodos] = useTodo([]);

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
        <div class="overflow-x-auto card  h-screen">
            <table class="table table-zebra w-full shadow-xl">

                <thead>
                    <tr>
                        <th></th>
                        <th>Task Name</th>
                        <th>Date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => <tr key={todo.id}>
                            <th></th>
                            <th>
                                <h1>{todo.name}</h1>
                            </th>
                            <th></th>
                            <th>
                                <button className='w-100' onClick={() => handleDelete(todos._id)}>Delete</button>
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default CompleteTask;