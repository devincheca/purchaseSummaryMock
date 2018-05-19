import React from 'react'
import data from '../data.jsx'
import PropTypes from 'prop-types'
import styles from '../styles.jsx'

const Details = ({ active, onClick }) => 
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
          Hide item details
        </span> -
        </div>
        <div className="row">
          <div className="col-3">
            <img 
              className="img-fluid animated slideInLeft"
              src={data.imgSrc}></img>
          </div>
          <div className="col-9 animated fadeInUp">
            <div>
              {data.description}
            </div>
            <div className="row">
              <div className="col-6" style={{fontWeight: 'bold'}}>${data.price}</div>
              <div className="col-6" style={styles.align.right}>Qty:{data.quantity}</div>
            </div>
            <div style={styles.text.lineThrough}>
              ${data.subtotal}
            </div>
          </div>
        </div>
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
          See item details
      </span> +
    </div>
  )
}

Details.propTypes = 
{
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Details