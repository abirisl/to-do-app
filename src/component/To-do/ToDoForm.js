import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TodoTask from './TodoTask';

const ToDoForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,e) => {
        
        const url = `http://localhost:5000/todo`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
            .then(result => {
                e.target.reset()
            console.log(result);
        })
    }
    return (
        <div class="card flex justify-center h-screen items-center">
            <div className='w-96 bg-base-100 shadow-xl'>
            <form className='input-group' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Daily task" class="input input-bordered w-full max-w-xs" {...register("name", { required: true, maxLength: 20 })} />
                <button type='submit' className='btn btn-red'>Add</button>
            </form>
            <div className=' h-[400px] overflow-y-scroll'>
              <TodoTask></TodoTask>
            </div>
            </div>
        </div>

    );
};

export default ToDoForm;