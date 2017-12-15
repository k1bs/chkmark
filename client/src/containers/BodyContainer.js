import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteHero from '../components/NoteHero'
import NoteList from '../components/NoteList'
import Home from '../components/Home'
import { setCurrentNote, deleteNote, updateNote, editMode } from '../actions'

class BodyContainer extends Component {
  renderCorrectView (props) {

  }

  render () {
    const { notes,
      currentNote,
      viewMode,
      onCurrentClick,
      onDeleteClick,
      editMode,
      onUpdateClick,
      onEditClick } = this.props
    return (
      <div className='app-body'>
        {viewMode === 'NOTE' &&
        <div className='note-container'>
          <NoteList notes={notes}
            onCurrentClick={onCurrentClick} />
          <NoteHero notes={notes}
            currentNote={currentNote}
            onDeleteClick={onDeleteClick}
            editMode={editMode}
            onUpdateClick={onUpdateClick}
            onEditClick={onEditClick} />
        </div>}
        {viewMode === 'HOME' && <Home />}
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
    onEditClick: (value) => dispatch(editMode(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer)
