const visibilityFilter = (state = "DEFAULT", action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

module.exports = visibilityFilter