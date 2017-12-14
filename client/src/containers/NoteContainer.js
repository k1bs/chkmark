import React, { Component } from 'react'
import { connect } from 'react-redux'
import NoteHero from '../components/NoteHero'
import NoteList from '../components/NoteList'
import { setCurrentNote } from '../actions'

class NoteContainer extends Component {
  render () {
    const { notes, currentNote, clickCurrentNote } = this.props
    return (
      <div className='app-body'>
        <p>Hello world from NoteContainer</p>
        <NoteList notes={notes} clickCurrentNote={clickCurrentNote} />
        <NoteHero notes={notes} currentNote={currentNote} />
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
    clickCurrentNote: (id) => dispatch(setCurrentNote(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteContainer)
