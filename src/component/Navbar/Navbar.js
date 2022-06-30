import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assest/to-do.png.png'

const Navbar = () => {
    const menuItems = <>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/complete">Completed Task</Link></li>
    <li><Link to="/todo">To Do</Link></li>
    <li><Link to="/calendar">Calendar</Link></li>
   
  </>

    return (
       
        <header>
        <nav className="navbar bg-[#4a4a4a] font-bold">
          <div className="navbar-start relative flex align-middle items-center">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost text-white lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menuItems}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl"> 
              <img src={logo} className='absolute ml-1 left-8 w-[70px] h-[50px]' alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-white">
              {menuItems}
            </ul>
          </div>
        </nav>
      </header>
    );
};
export default Navbar;