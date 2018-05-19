const applyPromoPress = (state = 'DENIED', action) => {
  switch (action.type) {
    case 'APPLY_PROMO':
      return Object.assign({}, state, { applyDiscount: action.code === 'DISCOUNT' ? 'GRANTED' : 'DENIED' })
    default:
      return state
  }
}

export default applyPromoPress