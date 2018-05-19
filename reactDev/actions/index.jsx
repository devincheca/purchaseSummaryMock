export const setBurgerFilter = filter => {
  return {
      type: 'SET_BURGER_FILTER',
      filter
    }
}

export const setSearchFilter = filter => {
  return {
    type: 'SET_SEARCH_FILTER',
    filter
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
}

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