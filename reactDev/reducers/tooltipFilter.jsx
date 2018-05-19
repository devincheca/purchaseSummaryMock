const tooltipFilter = (state = 'OFF', action) => {
  switch (action.type) {
    case 'SET_TOOLTIP_FILTER':
      return action.filter ? 'OFF' : 'ON'
    default:
      return state
  }
}

export default tooltipFilter