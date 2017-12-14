import React from 'react'
import NoteSmall from './NoteSmall'
import PropTypes from 'prop-types'

const NoteList = ({notes, clickCurrentNote}) => {
  return (
    <ul>
      {notes.map((note) => {
        return (
          <NoteSmall
            key={note.id}
            {...note}
            onClick={() => clickCurrentNote(note.id)}
          />
        )
      })}
    </ul>
  )
}

NoteList.proptypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired
  }).isRequired).isRequired,
  clickCurrentNote: PropTypes.func.isRequired
}

export default NoteList
