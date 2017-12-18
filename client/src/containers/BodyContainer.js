import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteHero from '../components/NoteHero'
import NoteList from '../components/NoteList'
import Home from '../components/Home'
import Login from '../components/Login'
import { setCurrentNote, deleteNote, updateNote, editMode, addNote, newNote, attemptLogin } from '../actions'

class BodyContainer extends Component {
  render () {
    const { notes,
      currentNote,
      viewMode,
      onCurrentClick,
      onDeleteClick,
      editMode,
      onUpdateClick,
      onEditClick,
      onAddClick,
      onNewClick,
      onLoginClick } = this.props
    return (
      <div className='app-body'>
        {viewMode === 'NOTE' &&
        <div className='note-container'>
          <NoteList notes={notes}
            onCurrentClick={onCurrentClick}
            onNewClick={onNewClick} />
          <NoteHero notes={notes}
            currentNote={currentNote}
            onDeleteClick={onDeleteClick}
            editMode={editMode}
            onUpdateClick={onUpdateClick}
            onEditClick={onEditClick}
            onAddClick={onAddClick} />
        </div>}
        {viewMode === 'HOME' && <Home />}
        {viewMode === 'LOGIN' && <Login onLoginClick={onLoginClick} />}
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
    onLoginClick: (username, password) => dispatch(attemptLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer)
