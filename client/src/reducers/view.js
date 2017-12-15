const view = (state = 'NOTE', action) => {
  switch (action.type) {
    case 'VIEW_NOTE':
      return 'NOTE'
    case 'VIEW_LOGIN':
      return 'LOGIN'
    case 'VIEW_PROFILE':
      return 'PROFILE'
    case 'VIEW_REGISTER':
      return 'REGISTER'
    case 'VIEW_HOME':
      return 'HOME'
    default:
      return state
  }
}

export default view
