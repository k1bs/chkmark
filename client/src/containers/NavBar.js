import React from 'react'
import { connect } from 'react-redux'
import { viewMode, attemptLogout, attemptProfile } from '../actions'

const NavBar = ({ dispatch, currentViewMode, user }) => {
  console.log(user)
  return (
    <div className='nav-bar'>
      <div className='nav-list'>
        {user.token
          ? <div>
            <span onClick={() => dispatch(viewMode('NOTE'))}>Notes</span>
            <span onClick={() => dispatch(attemptLogout())}>Logout</span>
            <span onClick={() => dispatch(attemptProfile())}>Profile</span>
          </div>
          : <div>
            <span onClick={() => dispatch(viewMode('LOGIN'))}>Login</span>
            <span onClick={() => dispatch(viewMode('REGISTER'))}>Register</span>
          </div>}

      </div>
      <div className='logo-div'>
        <p><img alt='logo' className='nav-logo-img' src='/logo-transparent.png' /></p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentViewMode: state.viewMode,
    user: state.user
  }
}

export default connect(mapStateToProps, null)(NavBar)
