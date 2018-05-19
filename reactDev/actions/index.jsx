export const applyPromo = code =>
{
  return {
    type: 'APPLY_PROMO',
    code,
  }
}

export const setDetailsFilter = filter =>
{
  return {
    type: 'SET_DETAILS_FILTER',
    filter,
  }
}

export const setPromoFilter = filter =>
{
  return {
    type: 'SET_PROMO_FILTER',
    filter,
  }
}

export const setTooltipFilter = filter =>
{
  return {
    type: 'SET_TOOLTIP_FILTER',
    filter,
  }
}