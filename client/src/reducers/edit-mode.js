const editMode = (state = false, action) => {
  switch (action.type) {
    case 'EDIT_MODE':
      return action.value
    case 'UPDATE_NOTE':
    case 'SET_CURRENT_NOTE':
      return false
    default:
      return state
  }
}

export default editMode
