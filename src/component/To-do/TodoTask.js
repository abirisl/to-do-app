import React, { useEffect, useState } from 'react';

const TodoTask = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('task.json')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

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
                                    <h1>{todo.title}</h1>
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