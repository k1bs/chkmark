let nextNoteId = 2

export const addNote = (text) => {
  return {
    type: 'ADD_NOTE',
    id: nextNoteId++,
    note: text
  }
}

export const updateNote = (id, text) => {
  return {
    type: 'UPDATE_NOTE',
    id,
    note: text
  }
}

export const deleteNote = (id) => {
  return {
    type: 'DELETE_NOTE',
    id
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const login = (token, name) => {
  return {
    type: 'LOGIN',
    token,
    name
  }
}

export const setCurrentNote = (id) => {
  return {
    type: 'SET_CURRENT_NOTE',
    id
  }
}

export const clearCurrentNote = () => {
  return {
    type: 'CLEAR_CURRENT_NOTE'
  }
}

export const editMode = (value) => {
  return {
    type: 'EDIT_MODE',
    value
  }
}

export const fetchingNotes = (value) => {
  return {
    type: 'FETCHING_NOTES',
    value
  }
}

export const viewMode = (value) => {
  return {
    type: 'VIEW_MODE',
    value
  }
}
