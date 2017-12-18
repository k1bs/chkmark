// todo: set default state to empty array for production

const notes = (state = [{id: 0, note: 'First note'}, {id: 1, note: 'Second note'}], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, {id: action.id, text: action.text}]
    case 'UPDATE_NOTE':
      return state.map((note) => {
        return (note.id === action.id)
        ? {...note, text: action.text}
        : note
      })
    case 'DELETE_NOTE':
      return state.filter((note, i) => {
        return note.id !== action.id
      })
    case 'SET_NOTES':
      return action.notes
    default:
      return state
  }
}

export default notes
