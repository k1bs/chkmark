const fetchingNotes = (state = false, action) => {
  switch (action.type) {
    case 'FETCHING_NOTES':
      return action.value
    default:
      return state
  }
}

export default fetchingNotes
