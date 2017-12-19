import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteHero from '../components/NoteHero'
import NoteList from '../components/NoteList'
import { setCurrentNote, fetchDeleteNote, fetchUpdateNote, editMode, fetchAddNote, newNote, fetchAllNotes } from '../actions'

class NoteContainer extends Component {
  componentDidMount () {
    this.props.fetchAllNotes()
  }
  render () {
    const { notes,
      fetchingNotes,
      currentNote,
      onCurrentClick,
      onDeleteClick,
      editMode,
      onUpdateClick,
      onEditClick,
      onAddClick,
      onNewClick } = this.props
    return (
      !fetchingNotes
        ? <div className='note-container'>
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
        </div>
        : <div className='spinner-div'>
          <i className='fa fa-circle-o-notch fa-spin fa-3x fa-fw' />
        </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    currentNote: state.currentNote,
    editMode: state.editMode,
    fetchingNotes: state.fetchingNotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCurrentClick: (id) => dispatch(setCurrentNote(id)),
    onDeleteClick: (id) => dispatch(fetchDeleteNote(id)),
    onUpdateClick: (id, text) => dispatch(fetchUpdateNote(id, text)),
    onEditClick: (value) => dispatch(editMode(value)),
    onAddClick: (text) => {
      console.log(text)
      dispatch(fetchAddNote(text))
    },
    onNewClick: () => dispatch(newNote()),
    fetchAllNotes: () => dispatch(fetchAllNotes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)
