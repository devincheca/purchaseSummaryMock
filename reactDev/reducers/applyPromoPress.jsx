const applyPromoPress = (state = '', action) => {
  switch (action.type) {
    case 'APPLY_PROMO':
      return action.code
    default:
      return state
  }
}

export default applyPromoPress