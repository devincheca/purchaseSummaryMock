import { combineReducers } from 'redux'
import applyPromoPress from './applyPromoPress.jsx'
import detailsFilter from './detailsFilter.jsx'
import promoFilter from './promoFilter.jsx'
import tooltipFilter from './tooltipFilter.jsx'

const purchaseSummary = combineReducers({
  applyPromoPress,
  detailsFilter,
  promoFilter,
  tooltipFilter,
})

export default purchaseSummary