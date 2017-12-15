import React from 'react'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='nav-list'>
        <span>Notes</span>
        <span>Logout</span>
        <span>Profile</span>
      </div>
      <div className='logo-div'>
        <p><img className='nav-logo-img' src='/logo-transparent.png' /></p>
      </div>
    </div>
  )
}

export default NavBar
