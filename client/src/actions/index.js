import fetch from 'cross-fetch'
import Auth from '../modules/Auth'

let nextNoteId = 2

export const addNote = (id, text) => {
  return {
    type: 'ADD_NOTE',
    id: id,
    text
  }
}

export const fetchAddNote = (text) => {
  return (dispatch) => {
    const token = Auth.getToken()
    fetch('/notes', {
      method: 'POST',
      body: JSON.stringify({
        note: {
          text
        }
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
        token
      }
    }).then(res => res.json())
      .then(json => {
        console.log(json.note)
        dispatch(addNote(json.note.id, json.note.text))
      })
  }
}

export const setNotes = (notes) => {
  return {
    type: 'SET_NOTES',
    notes
  }
}

export const newNote = () => {
  return {
    type: 'NEW_NOTE'
  }
}

export const updateNote = (id, text) => {
  return {
    type: 'UPDATE_NOTE',
    id,
    text
  }
}

export const fetchUpdateNote = (id, text) => {
  return (dispatch) => {
    const token = Auth.getToken()
    fetch(`/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
        token
      },
      body: JSON.stringify({
        text
      })
    }).then(res => res.json())
      .then(json => {
        dispatch(updateNote(json.note.id, json.note.text))
      })
  }
}

export const deleteNote = (id) => {
  return {
    type: 'DELETE_NOTE',
    id
  }
}

export const fetchDeleteNote = (id) => {
  return (dispatch) => {
    const token = Auth.getToken()
    fetch(`/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
        token
      }
    }).then(res => res.json())
      .then(json => {
        console.log(json)
        dispatch(deleteNote(id))
      })
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const fetchAllNotes = () => {
  return (dispatch) => {
    const token = Auth.getToken()
    dispatch(fetchingNotes(true))
    fetch('/notes', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${token}`,
        token
      }
    }).then(res => res.json())
      .then(json => {
        dispatch(setCurrentNote(null))
        dispatch(setNotes(json.notes))
      }).catch(err => console.log(err))
  }
}

export const attemptLogout = () => {
  return (dispatch) => {
    const token = Auth.getToken()
    fetch('/logout', {
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${token}`,
        token
      }
    }).then(res => {
      Auth.deauthenticateUser()
      dispatch(logout())
    })
  }
}

export const attemptLogin = (username, password) => {
  return (dispatch) => {
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(json => {
        if (json.token) {
          Auth.authenticateToken(json.token)
          dispatch(login(json.token, null))
          dispatch(viewMode('NOTE'))
        }
      }).catch(err => console.log(err))
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
