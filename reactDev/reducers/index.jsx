import { combineReducers } from 'redux'
import burgerFilter from './burgerFilter.jsx'
import searchFilter from './searchFilter.jsx'
import visibilityFilter from './visibilityFilter.jsx'

const dashboardApp = combineReducers({
  burgerFilter,
  searchFilter,
  visibilityFilter
})

export default dashboardApp