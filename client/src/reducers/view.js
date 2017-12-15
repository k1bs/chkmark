const view = (state = 'NOTE', action) => {
  switch (action.type) {
    case 'VIEW_MODE':
      return action.value
    default:
      return state
  }
}

export default view
