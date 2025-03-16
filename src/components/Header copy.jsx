import React from 'react'
import logo from "../assets/tasts.jpg"
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
function Header() {
  return (
    <div className='flex items-center'>
        <img src={logo} width={60} height={60}/>
        <div className='flex bg-gray-800 p-2 px-2 w-full items-center mx-5 rounded-full'>
        <IoSearch />
        <input type='text' className='bg-transparent px-2 outline-none' placeholder="Search for Movies"/>
        </div>
        <div>
             <FaUser className='text-white w-10 h-7'/>  
        </div>
    </div>
  )
}

export default Header