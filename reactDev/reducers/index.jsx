import { combineReducers } from 'redux'
import applyPromoPress from './applyPromoPress.jsx'
import detailsFilter from './detailsFilter.jsx'
import promoFilter from './promoFilter.jsx'

const purchaseSummary = combineReducers({
  applyPromoPress,
  detailsFilter,
  promoFilter,
})

export default purchaseSummary