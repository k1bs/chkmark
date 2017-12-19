import React from 'react'
import { connect } from 'react-redux'
import { viewMode, attemptLogout, attemptProfile } from '../actions'

const NavBar = ({ dispatch, currentViewMode, user }) => {
  return (
    <div className='nav-bar'>
      <div className='nav-list'>
        {user.token
          ? <div className='nav-module'>
            <span onClick={() => dispatch(viewMode('NOTE'))}>Notes</span>
            <span onClick={() => dispatch(attemptLogout())}>Logout</span>
            <span onClick={() => dispatch(attemptProfile())}>Profile</span>
          </div>
          : <div className='nav-module'>
            <span onClick={() => dispatch(viewMode('LOGIN'))}>Login</span>
            <span onClick={() => dispatch(viewMode('REGISTER'))}>Register</span>
          </div>}
        <span onClick={() => dispatch(viewMode('INSTRUCTIONS'))}>Instructions</span>
      </div>
      {currentViewMode !== 'HOME'
      ? <div className='logo-div'>
        <img alt='logo' className='nav-logo-img' src='/logo-transparent.png' />
      </div>
      : ''}
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
