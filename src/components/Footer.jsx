import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear().toString()

  return (
    <footer className='main-footer'>
      <small>
        Copyright &copy; {year} All rights reserved. Created by{' '}
        <a
          href='https://www.linkedin.com/in/vince-jepoy-mendoza-5b93a6223/'
          target='_blank'
          rel='noreferrer'
        >
          Vince Jepoy Mendoza
        </a>
      </small>
    </footer>
  )
}

export default Footer
