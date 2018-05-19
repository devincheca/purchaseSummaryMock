const promoCodeChange = (state = '', action) => {
  switch (action.type) {
    case 'PROMO_CODE_CHANGE':
      return action.code
    default:
      return state
  }
}

export default promoCodeChange