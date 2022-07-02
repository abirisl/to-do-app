import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import ToDoForm from './component/To-do/ToDoForm'
import TodoTask from './component/To-do/TodoTask';
import Calender from './Calender/Calender';
import CompleteTask from './CompletedTask/CompleteTask';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='todos' element={<ToDoForm></ToDoForm>}></Route>
        <Route path='todos/:id' element={<TodoTask></TodoTask>}></Route>
        <Route path='calendar' element={<Calender></Calender>}></Route>
        <Route path='complete' element={<CompleteTask></CompleteTask>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
