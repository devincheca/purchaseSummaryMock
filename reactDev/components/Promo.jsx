import React from 'react'
import PromoInput from '../containers/PromoInput.jsx'
import PropTypes from 'prop-types'
import styles from '../styles.jsx'

const Promo = ({ active, onClick }) => 
{
  if (active)
  {
    return (
      <div 
        className="animated fadeInUp">
        <div onClick={e => 
          {
            e.preventDefault()
            onClick(active)
          }}>
        <span
          style={styles.text.underline}>
          Hide promo code
        </span> -
        </div>
        <PromoInput />
      </div>
    )
  }
  return (
    <div 
      className="animated fadeInUp"
      onClick={e => 
        {
          e.preventDefault()
          onClick(active)
        }}>
      <span
          style={styles.text.underline}>
          Apply promo code
      </span> +
    </div>
  )
}

Promo.propTypes = 
{
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Promo