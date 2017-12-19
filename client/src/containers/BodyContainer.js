import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteContainer from './NoteContainer'
import Home from '../components/Home'
import Register from '../components/Register'
import Profile from '../components/Profile'
import Login from '../components/Login'
import { attemptLogin, attemptRegister } from '../actions'

class BodyContainer extends Component {
  render () {
    const { viewMode,
            onLoginClick,
            onRegisterClick,
            user } = this.props
    return (
      <div className='app-body'>
        {viewMode === 'NOTE' && <NoteContainer />}
        {viewMode === 'HOME' && <Home />}
        {viewMode === 'LOGIN' && <Login onLoginClick={onLoginClick} />}
        {viewMode === 'REGISTER' && <Register onRegisterClick={onRegisterClick} />}
        {viewMode === 'PROFILE' && <Profile user={user} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    viewMode: state.viewMode,
    editMode: state.editMode,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (username, password) => dispatch(attemptLogin(username, password)),
    onRegisterClick: (username, password, name, email) => (
      dispatch(attemptRegister(username, password, name, email))
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer)
