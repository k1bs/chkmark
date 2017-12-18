import React from 'react'
import PropTypes from 'prop-types'

const NoteSmall = ({ onCurrentClick, note }) => {
  return (
    <div className='note-small'>
      <span onClick={onCurrentClick}>{note.substring(0, 35)}</span>
    </div>
  )
}

NoteSmall.propTypes = {
  onCurrentClick: PropTypes.func.isRequired,
  note: PropTypes.string.isRequired
}

export default NoteSmall
