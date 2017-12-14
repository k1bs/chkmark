// todo: set default state to null for production

const currentNote = (state = 1, action) => {
  switch (action.type) {
    case 'SET_CURRENT_NOTE':
      return action.id
    case 'CLEAR_CURRENT_NOTE':
      return null
    case 'DELETE_NOTE':
      return state === action.id ? null : state
    default:
      return state
  }
}

export default currentNote
