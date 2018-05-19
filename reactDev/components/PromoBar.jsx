import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.jsx'

const PromoBar = ({ code, onChange, onClick }) =>
{
  return (
    <div className="row">
      <div className="col-9 animated slideInLeft">
        <div style={{color: 'grey'}}>Promo code</div>
        <input onChange={e =>
        {
          e.preventDefault()
          onChange(this.value)
        }}>
        </input>
      </div>
      <div className="col-3 animated fadeInUp" style={styles.align.right}>
        <button
          className="btn"
          onClick={e => 
            {
              e.preventDefault()
              onClick(code)
            }}>
          style={Object.assign({}, styles.round, {fontWeight: 'bold'})}>
          Apply
        </button>
      </div>
    </div>
  )
}

PromoBar.propTypes = 
{
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PromoBar