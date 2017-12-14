const currentNote = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_NOTE':
      return action.id
    case 'CLEAR_CURRENT_NOTE':
      return null
    default:
      return state
  }
}

export default currentNote
