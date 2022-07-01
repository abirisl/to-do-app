import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import ToDoForm from './component/To-do/ToDoForm';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='todo' element={<ToDoForm></ToDoForm>}></Route>
      </Routes>
    </div>
  );
}

export default App;
