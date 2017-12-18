import React from 'react'
import ReactMarkdown from 'react-markdown'

const NoteView = ({note}) => {
  return (
    <ReactMarkdown source={note.text} />
  )
}

export default NoteView
