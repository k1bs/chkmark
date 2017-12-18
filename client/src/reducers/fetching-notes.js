const fetchingNotes = (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_NOTES':
      return action.value
    case 'SET_NOTES':
      return false
    default:
      return state
  }
}

export default fetchingNotes
