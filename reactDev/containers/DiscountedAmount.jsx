import React from 'react'
import { connect } from 'react-redux'
import { applyPromo } from '../actions/index.jsx'
import PropTypes from 'prop-types'

const mapStateToProps = (state, ownProps) => {
  return {
    discounted: state.applyPromoPress === ownProps.discounted,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (active) => {
      dispatch(setDetailsFilter(active))
    }
  }
}

function compute(discount) 
{
  return discount
    ? 108.03 * .9
    : 108.03
}

let Amount = ({ discount }) =>
{
  return (
    <div>
      {'$' + compute(discount)}
    </div>
  )
}
Amount.propTypes = 
{
  discount: PropTypes.string.isRequired
}

const DiscountedAmount = connect(
  mapStateToProps,
  null
)(Amount)

export default DiscountedAmount