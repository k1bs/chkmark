const editMode = (state = false, action) => {
  switch (action.type) {
    case 'EDIT_MODE':
      return action.value
    case 'ADD_NOTE':
    case 'UPDATE_NOTE':
    case 'DELETE_NOTE':
    case 'SET_CURRENT_NOTE':
      return false
    case 'NEW_NOTE':
      return true
    default:
      return state
  }
}

export default editMode
