import React from 'react'
import Delete from './buttons/Delete'
import PropTypes from 'prop-types'
import NoteEdit from './NoteEdit'
import NoteView from './NoteView'

const NoteHero = ({ notes, currentNote, onDeleteClick, editMode, onUpdateClick, onEditClick }) => {
  return (
    <div className='note-hero'>
      {currentNote === null
        ? <p><span className='please-select'>'Please select a note!'</span></p>
        : <div>
          <div className='hero-button-module'>
            <span><i onClick={() => onEditClick(true)} className='fa fa-pencil fa-fw' aria-hidden='true' /></span>
            <Delete onDeleteClick={onDeleteClick} currentNote={currentNote} />
          </div>
          {editMode
              ? <NoteEdit note={notes.find((note) => note.id === currentNote)}
                onUpdateClick={onUpdateClick} />
              : <NoteView note={notes.find((note) => note.id === currentNote)} />}
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
  onDeleteClick: PropTypes.func.isRequired,
  onUpdateClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired
}

export default NoteHero
