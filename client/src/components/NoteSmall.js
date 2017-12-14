import React from 'react'
import PropTypes from 'prop-types'

const NoteSmall = ({ onClick, note }) => {
  return (
    <li onClick={onClick}>{note}</li>
  )
}

NoteSmall.propTypes = {
  onClick: PropTypes.func.isRequired,
  note: PropTypes.string.isRequired
}

export default NoteSmall
