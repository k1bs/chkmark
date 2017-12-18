import React from 'react'
import Delete from './buttons/Delete'
import PropTypes from 'prop-types'
import NoteEdit from './NoteEdit'
import NoteView from './NoteView'

const NoteHero = ({ notes, currentNote, onDeleteClick, editMode, onUpdateClick, onEditClick, onAddClick }) => {
  const handleClick = () => currentNote !== null ? onUpdateClick : onAddClick
  return (
    <div className='note-hero'>
      <div className='hero-button-module'>
        <span><i onClick={() => onEditClick(true)} className='fa fa-pencil fa-fw' aria-hidden='true' /></span>
        <Delete onDeleteClick={onDeleteClick} currentNote={currentNote} />
      </div>
      {editMode
        ? <NoteEdit note={notes.find((note) => note.id === currentNote)}
          onUpdateClick={handleClick()} />
        : currentNote !== null
          ? <NoteView note={notes.find((note) => note.id === currentNote)} />
          : <p>Please select or create a note!</p>}
    </div>
  )
}

NoteHero.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired
  }).isRequired).isRequired,
  currentNote: PropTypes.number,
  onDeleteClick: PropTypes.func.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired
}

export default NoteHero
