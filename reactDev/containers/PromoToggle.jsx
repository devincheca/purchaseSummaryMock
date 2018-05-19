import { connect } from 'react-redux'
import { setPromoFilter } from '../actions/index.jsx'
import Promo from '../components/Promo.jsx'

const mapStateToProps = (state) => {
  return {
    active: state.promoFilter === 'ON',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (active) => {
      dispatch(setPromoFilter(active))
    }
  }
}

const PromoToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Promo)

export default PromoToggle