import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <Link to='/todo' replace title='Go to homepage'>
        <h2>
          Tod
          <BsPersonCircle /> App
        </h2>
      </Link>
    </nav>
  )
}

export default Navbar
