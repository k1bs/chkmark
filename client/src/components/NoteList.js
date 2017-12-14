import React from 'react'
import NoteSmall from './NoteSmall'
import PropTypes from 'prop-types'

const NoteList = ({notes, onCurrentClick, onDeleteClick}) => {
  return (
    <ul>
      {notes.map((note) => {
        return (
          <NoteSmall
            key={note.id}
            {...note}
            onCurrentClick={() => onCurrentClick(note.id)}
            onDeleteClick={() => onDeleteClick(note.id)}
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
  onCurrentClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default NoteList
