import React from 'react'
import Delete from './buttons/Delete'
import PropTypes from 'prop-types'

const NoteHero = ({ notes, currentNote, onDeleteClick }) => {
  return (
    <div>
      {currentNote === null
        ? <p>'Please select a note!'</p>
        : <div>
          <p>{notes.find((note) => note.id === currentNote).note}
            <Delete onDeleteClick={onDeleteClick} currentNote={currentNote} />
          </p>
        </div>}
    </div>
  )
}

NoteHero.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired
  }).isRequired).isRequired,
  currentNote: PropTypes.number,
  onDeleteClick: PropTypes.func.isRequired
}

export default NoteHero
