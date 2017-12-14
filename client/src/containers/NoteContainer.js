import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteHero from '../components/NoteHero'
import NoteList from '../components/NoteList'
import { setCurrentNote, deleteNote } from '../actions'

class NoteContainer extends Component {
  render () {
    const { notes, currentNote, onCurrentClick, onDeleteClick } = this.props
    return (
      <div className='app-body'>
        <p>Hello world from NoteContainer</p>
        <NoteList notes={notes}
          onCurrentClick={onCurrentClick} />
        <NoteHero notes={notes}
          currentNote={currentNote}
          onDeleteClick={onDeleteClick} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    currentNote: state.currentNote
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCurrentClick: (id) => dispatch(setCurrentNote(id)),
    onDeleteClick: (id) => dispatch(deleteNote(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)
