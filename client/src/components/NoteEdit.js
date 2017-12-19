import React from 'react'

const NoteEdit = ({note, onUpdateClick}) => {
  let input
  return (
    <div className='note-edit'>
      <form id='edit-form'
        onSubmit={(e) => {
          e.preventDefault()
          !note ? onUpdateClick(input.value) : onUpdateClick(note.id, input.value)
        }}>
        <input id='edit-form-submit' type='submit' value='Edit Note' />
        <label htmlFor='edit-form-submit'><i className='fa fa-floppy-o fa-fw fa-lg' aria-hidden='true' /></label>
      </form>
      <textarea
        form='edit-form'
        ref={node => {
          input = node
        }}
        defaultValue={note ? note.text : ''} />
    </div>
  )
}

export default NoteEdit
