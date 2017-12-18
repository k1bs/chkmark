// todo: set default state to null for production

const currentNote = (state = null, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
    case 'SET_CURRENT_NOTE':
      return action.id
    case 'CLEAR_CURRENT_NOTE':
    case 'NEW_NOTE':
      return null
    case 'DELETE_NOTE':
      return state === action.id ? null : state
    default:
      return state
  }
}

export default currentNote
