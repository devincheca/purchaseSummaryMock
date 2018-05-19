const promoFilter = (state = 'OFF', action) => {
  switch (action.type) {
    case 'SET_PROMO_FILTER':
      return action.filter ? 'OFF' : 'ON'
    default:
      return state
  }
}

export default promoFilter