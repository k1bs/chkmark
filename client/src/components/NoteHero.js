import React from 'react'
import PropTypes from 'prop-types'

const NoteHero = ({ notes, currentNote }) => {
  return (
    <div>
      <p>
        {notes.find((note) => note.id === currentNote).note}
      </p>
    </div>
  )
}

NoteHero.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired
  }).isRequired).isRequired,
  currentNote: PropTypes.number
}

export default NoteHero
