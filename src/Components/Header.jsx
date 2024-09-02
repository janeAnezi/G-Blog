import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
// import { FaBarsStaggered } from "react-icons/fa6"
import { AiOutlineClose } from "react-icons/ai"

export default function Header() {
  return (
    <nav>
      <div className='container nav_container'>
        <Link to='/' className='nav_logo' >
          <img src={Logo} alt="navbar logo" />
        </Link>
        <ul className='nav_menu'>
          <li><Link to='/profile/sdfsdf'>YourFavTech-Sis</Link></li>
          <li><Link to='/create'>Create Post</Link></li>
          <li><Link to='/authors'>Authors</Link></li>
          <li><Link to='/logout'>Logout</Link></li>
        </ul>
        <button className='nav_toggle-btn'>
          {/* <FaBarsStaggered /> */}
          <AiOutlineClose />

        </button>
      </div>
    </nav>
  )
}
