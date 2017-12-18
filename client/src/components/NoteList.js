import React from 'react'
import NoteSmall from './NoteSmall'
import PropTypes from 'prop-types'

const NoteList = ({ notes, onCurrentClick, onDeleteClick, onNewClick }) => {
  return (
    <div className='note-list'>
      <i onClick={onNewClick} className='fa fa-plus fa-fw' aria-hidden='true' />
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
    </div>
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
