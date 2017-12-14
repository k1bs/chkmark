import React from 'react'
import PropTypes from 'prop-types'

const NoteSmall = ({ onCurrentClick, note }) => {
  return (
    <li>
      <span onClick={onCurrentClick}>{note}</span>
    </li>
  )
}

NoteSmall.propTypes = {
  onCurrentClick: PropTypes.func.isRequired,
  note: PropTypes.string.isRequired
}

export default NoteSmall
