import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteHero from '../components/NoteHero'
import NoteList from '../components/NoteList'
import { setCurrentNote, deleteNote, updateNote, editMode } from '../actions'

class NotesContainer extends Component {
  render () {
    const { notes,
      currentNote,
      onCurrentClick,
      onDeleteClick,
      editMode,
      onUpdateClick,
      onEditClick } = this.props
    return (
      <div className='app-body'>
        <p>Hello world from NotesContainer</p>
        <NoteList notes={notes}
          onCurrentClick={onCurrentClick} />
        <NoteHero notes={notes}
          currentNote={currentNote}
          onDeleteClick={onDeleteClick}
          editMode={editMode}
          onUpdateClick={onUpdateClick}
          onEditClick={onEditClick} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    currentNote: state.currentNote,
    editMode: state.editMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCurrentClick: (id) => dispatch(setCurrentNote(id)),
    onDeleteClick: (id) => dispatch(deleteNote(id)),
    onUpdateClick: (id, text) => dispatch(updateNote(id, text)),
    onEditClick: (value) => dispatch(editMode(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)
