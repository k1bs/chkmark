import fetch from 'cross-fetch'
import Auth from '../modules/Auth'

let nextNoteId = 2

export const addNote = (text) => {
  return {
    type: 'ADD_NOTE',
    id: nextNoteId++,
    note: text
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
