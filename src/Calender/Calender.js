import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import CompleteTask from '../CompletedTask/CompleteTask';

const Calender = () => {
    const [date,setDate] = useState(new Date())
    return (
        <div className='card flex justify-center h-screen items-center'>
          <div className='w-96 h-[400px] bg-base-100 shadow-xl'>
          <DayPicker
            mode='single'
            selected={date}
            onSelect={setDate}
            />
          </div>
        </div>
    );
};

export default Calender;