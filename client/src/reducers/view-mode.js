const viewMode = (state = 'HOME', action) => {
  switch (action.type) {
    case 'VIEW_MODE':
      return action.value
    case 'LOGIN':
      return 'NOTE'
    case 'LOGOUT':
      return 'LOGIN'
    default:
      return state
  }
}

export default viewMode

const countDown = (num) => {
  if (num < 0) return
  console.log(num)
  countDown(num - 1)
}
