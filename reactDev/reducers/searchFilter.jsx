const searchFilter = (state = 'OFF', action) => {
  switch (action.type) {
    case 'SET_SEARCH_FILTER':
      return action.filter ? 'OFF' : 'ON'
    default:
      return state
  }
}

export default searchFilter