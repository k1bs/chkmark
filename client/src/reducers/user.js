// todo: set default state to null for production

const user = (state = {token: 'asdcasdjrl', name: 'k1bs'}, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return null
    case 'LOGIN':
      return {
        token: action.token,
        name: action.name
      }
    default:
      return state
  }
}

export default user
