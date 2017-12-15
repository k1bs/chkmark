import React from 'react'
import ReactMarkdown from 'react-markdown'

const NoteView = ({note}) => {
  return (
    <ReactMarkdown source={note.note} />
  )
}

export default NoteView
