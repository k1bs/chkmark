import React from 'react'
import PropTypes from 'prop-types'

const Delete = ({ onDeleteClick, currentNote }) => {
  return <i onClick={() => onDeleteClick(currentNote)} className='fa fa-trash-o fa-fw' aria-hidden='true' />
}

Delete.propTypes = {
  onDeleteClick: PropTypes.func.isRequired
}

export default Delete
