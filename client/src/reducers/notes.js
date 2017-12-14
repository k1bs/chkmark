const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, {id: action.id, note: action.note}]
    case 'UPDATE_NOTE':
      return state.map((note) => {
        return (note.id === action.id)
        ? {...note, note: action.note}
        : note
      })
    case 'DELETE_NOTE':
      return state.filter((note, i) => {
        return note.id !== action.id
      })
    default:
      return state
  }
}

export default notes
