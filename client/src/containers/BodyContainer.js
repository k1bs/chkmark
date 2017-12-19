import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteContainer from './NoteContainer'
import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import { setCurrentNote,
         deleteNote,
         updateNote,
         editMode,
         addNote,
         newNote,
         attemptLogin,
         attemptRegister } from '../actions'

class BodyContainer extends Component {
  render () {
    const { viewMode,
            onLoginClick,
            onRegisterClick } = this.props
    return (
      <div className='app-body'>
        {viewMode === 'NOTE' && <NoteContainer />}
        {viewMode === 'HOME' && <Home />}
        {viewMode === 'LOGIN' && <Login onLoginClick={onLoginClick} />}
        {viewMode === 'REGISTER' && <Register onRegisterClick={onRegisterClick} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    currentNote: state.currentNote,
    viewMode: state.viewMode,
    editMode: state.editMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCurrentClick: (id) => dispatch(setCurrentNote(id)),
    onDeleteClick: (id) => dispatch(deleteNote(id)),
    onUpdateClick: (id, text) => dispatch(updateNote(id, text)),
    onEditClick: (value) => dispatch(editMode(value)),
    onAddClick: (text) => dispatch(addNote(text)),
    onNewClick: () => dispatch(newNote()),
    onLoginClick: (username, password) => dispatch(attemptLogin(username, password)),
    onRegisterClick: (username, password, name, email) => (
      dispatch(attemptRegister(username, password, name, email))
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer)
