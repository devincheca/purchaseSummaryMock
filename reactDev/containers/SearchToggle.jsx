import { connect } from 'react-redux'
import { setSearchFilter } from '../actions/index.jsx'
import SearchBar from '../components/SearchBar.jsx'

const mapStateToProps = (state) => {
  return {
    active: state.searchFilter === 'ON',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (active) => {
      dispatch(setSearchFilter(active))
    }
  }
}

const SearchToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchToggle