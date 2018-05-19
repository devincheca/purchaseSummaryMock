import React from 'react'
import { connect } from 'react-redux'
import { applyPromo } from '../actions/index.jsx'
import PropTypes from 'prop-types'

const mapStateToProps = (state, ownProps) => {
  return {
    discount: state.applyPromoPress === ownProps.discounted,
  }
}

function compute(discount) 
{
  return discount
    ? Math.round((108.03 * .9) * 100) / 100
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
  discount: PropTypes.bool
}

const DiscountedAmount = connect(
  mapStateToProps,
  null
)(Amount)

export default DiscountedAmount