import React from 'react'

const NoteEdit = ({note, onUpdateClick}) => {
  let input
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        onUpdateClick(note.id, input.value)
      }}>
        <input type='submit' value='Edit Note' />
        <textarea
          ref={node => {
            input = node
          }}
          defaultValue={note.note} />
      </form>
    </div>
  )
}

export default NoteEdit
