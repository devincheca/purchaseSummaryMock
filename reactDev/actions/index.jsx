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