// todo: set default state to null for production

const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return {}
    case 'LOGIN':
      return {
        token: action.token,
        name: action.name
      }
    case 'SET_USER':
      return {...state,
        name: action.user.name,
        email: action.user.email,
        username: action.user.username
      }
    default:
      return state
  }
}

export default user
