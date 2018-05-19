import { connect } from 'react-redux'
import { applyPromo, promoCodeChange } from '../actions/index.jsx'
import PromoBar from '../components/PromoBar.jsx'

const mapStateToProps = (state) => {
  return {
    code: state.code,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (code) => {
      dispatch(promoCodeChange(code))
    },
    onClick: (code) => {
      dispatch(applyPromo(code))
    }
  }
}

const PromoInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(PromoBar)

export default PromoInput