import { connect } from 'react-redux'
import { applyPromo } from '../actions/index.jsx'
import PromoBar from '../components/PromoBar.jsx'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (code) => {
      dispatch(applyPromo(code))
    }
  }
}

const PromoInput = connect(
  null,
  mapDispatchToProps
)(PromoBar)

export default PromoInput