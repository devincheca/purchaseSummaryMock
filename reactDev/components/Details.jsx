import React from 'react'
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
              src="public/images/redChair.jpeg"></img>
          </div>
          <div className="col-9 animated fadeInUp">
            <div>
              Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red
            </div>
            <div className="row">
              <div className="col-6" style={{fontWeight: 'bold'}}>$99.11</div>
              <div className="col-6" style={styles.align.right}>Qty:1</div>
            </div>
            <div style={styles.text.lineThrough}>
              $102.96
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