import React from 'react'
import ReactMarkdown from 'react-markdown'

const NoteView = ({note}) => {
  return (
    <ReactMarkdown className='note-view' source={note.text} />
  )
}

export default NoteView
