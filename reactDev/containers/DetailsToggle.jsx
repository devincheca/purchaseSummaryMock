import { connect } from 'react-redux'
import { setDetailsFilter } from '../actions/index.jsx'
import Details from '../components/Details.jsx'

const mapStateToProps = (state) => {
  return {
    active: state.detailsFilter === 'ON',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (active) => {
      dispatch(setDetailsFilter(active))
    }
  }
}

const DetailsToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)

export default DetailsToggle