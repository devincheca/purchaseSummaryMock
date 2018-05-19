const burgerFilter = (state = 'OFF', action) => {
  switch (action.type) {
    case 'SET_BURGER_FILTER':
      return action.filter ? 'OFF' : 'ON'
    default:
      return state
  }
}

export default burgerFilter