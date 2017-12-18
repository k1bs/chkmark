import React from 'react'

const NoteEdit = ({note, onUpdateClick}) => {
  let input
  return (
    <div className='note-edit'>
      <form onSubmit={(e) => {
        e.preventDefault()
        !note ? onUpdateClick(input.value) : onUpdateClick(note.id, input.value)
      }}>
        <input type='submit' value='Edit Note' />
        <textarea
          ref={node => {
            input = node
          }}
          defaultValue={note ? note.note : ''} />
      </form>
    </div>
  )
}

export default NoteEdit
