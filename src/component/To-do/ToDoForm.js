import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TodoList from './TodoList';
import TodoTask from './TodoTask';

const ToDoForm = () => {
    const [input,setInput] = useState("");
    console.log(input)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setInput(data);
    return (
        <div class="card flex justify-center h-screen items-center">
            <div className='w-96 p-3 h-[400px] bg-base-100 shadow-xl'>
            <form className='input-group' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Daily task" class="input input-bordered w-full max-w-xs" {...register("description", { required: true, maxLength: 20 })} />
                <button type='submit' className='btn btn-red'>Add</button>
            </form>
            <div>
              <TodoTask></TodoTask>
            </div>
            </div>
        </div>

    );
};

export default ToDoForm;