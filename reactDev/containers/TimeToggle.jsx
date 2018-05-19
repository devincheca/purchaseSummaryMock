import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index.jsx'
import TimeButton from '../components/TimeButton.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const TimeToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeButton)

export default TimeToggle