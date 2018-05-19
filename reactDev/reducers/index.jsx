import { combineReducers } from 'redux'
import applyPromoPress from './applyPromoPress.jsx'
import burgerFilter from './burgerFilter.jsx'
import detailsFilter from './detailsFilter.jsx'
import promoFilter from './promoFilter.jsx'
import searchFilter from './searchFilter.jsx'
import visibilityFilter from './visibilityFilter.jsx'

const purchaseSummary = combineReducers({
  applyPromoPress,
  burgerFilter,
  detailsFilter,
  promoFilter,
  searchFilter,
  visibilityFilter
})

export default purchaseSummary