import { connect } from 'react-redux'
import { setTooltipFilter } from '../actions/index.jsx'
import TooltipBar from '../components/TooltipBar.jsx'

const mapStateToProps = (state) => {
  return {
    active: state.tooltipFilter === 'ON',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (active) => {
      dispatch(setTooltipFilter(active))
    }
  }
}

const TooltipToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(TooltipBar)

export default TooltipToggle