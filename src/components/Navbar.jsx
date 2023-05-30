import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {BsFillBasket3Fill} from 'react-icons/bs'




function Navbar() {
  return (
    <nav className='bg-[#3a3a3a] text-white'>
      <ul>
        <li>
            <NavLink  to={"/"}>Home</NavLink>
        </li>
        <li>
            <NavLink to={"/admin"}>Shop</NavLink>
        </li>
      </ul>
      {/* <BsFillBasket3Fill className='basket-icon'></BsFillBasket3Fill> */}
    </nav>
  )
}

export default Navbar