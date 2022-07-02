import React, { useEffect, useState } from 'react';

const useTodo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])

    return [todos,setTodos]
};

export default useTodo;