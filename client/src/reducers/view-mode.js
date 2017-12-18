const viewMode = (state = 'NOTE', action) => {
  switch (action.type) {
    case 'VIEW_MODE':
      return action.value
    case 'LOGIN':
      return 'NOTE'
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
