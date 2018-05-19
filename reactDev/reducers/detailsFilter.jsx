const detailsFilter = (state = 'OFF', action) => {
  switch (action.type) {
    case 'SET_DETAILS_FILTER':
      return action.filter ? 'OFF' : 'ON'
    default:
      return state
  }
}

export default detailsFilter