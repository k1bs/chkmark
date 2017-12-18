import React from 'react'
import PropTypes from 'prop-types'

const NoteSmall = ({ onCurrentClick, text }) => {
  return (
    <div className='note-small'>
      <span onClick={onCurrentClick}>{text ? text.substring(0, 35) : ''}</span>
    </div>
  )
}

NoteSmall.propTypes = {
  onCurrentClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default NoteSmall
