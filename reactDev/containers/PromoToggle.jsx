import { connect } from 'react-redux'
import { setBurgerFilter } from '../actions/index.jsx'
import Menu from '../components/Menu.jsx'

const mapStateToProps = (state) => {
  return {
    active: state.burgerFilter === 'ON',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (active) => {
      dispatch(setBurgerFilter(active))
    }
  }
}

const BurgerToggle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default BurgerToggle