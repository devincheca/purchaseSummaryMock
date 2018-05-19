import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.jsx'

const PromoBar = ({ onClick }) =>
{
  let input
  return (
    <div className="">
      <form
        onSubmit={e =>
          {
            e.preventDefault()
            if (!input.value.trim())
            {
              return
            }
            onClick(input.value)
            input.value = ''
          }}>
        <span className="animated slideInLeft">
          <div style={{color: 'grey'}}>Promo code</div>
          <input ref={node => input = node} />
        </span>
        <span className="animated fadeInUp" style={{float: 'right'}}>
          <button
            className="btn"
            type="submit"
            style={Object.assign({}, styles.round, {fontWeight: 'bold'})}>
            Apply
          </button>
        </span>
      </form>
    </div>
  )
}

PromoBar.propTypes = 
{
  onClick: PropTypes.func.isRequired,
}

export default PromoBar