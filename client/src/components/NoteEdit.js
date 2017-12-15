import React from 'react'

const NoteEdit = ({note, onUpdateClick}) => {
  let input
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        onUpdateClick(note.id, input.value)
      }}>
        <textarea
          ref={node => {
            input = node
          }}
          defaultValue={note.note} />
        <input type='submit' value='Edit Note' />
      </form>
    </div>
  )
}

export default NoteEdit
