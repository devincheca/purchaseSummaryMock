import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.jsx'

const TooltipBar = ({ active, onClick }) => 
{
  if (active)
  {
    return (
      <div 
        className="">
        <div className="">
          <div 
            className="row" 
            onClick={e =>
            {
              e.preventDefault()
              onClick(active)
            }}>
            <div className="col-6" style={Object.assign({}, styles.align.left, styles.text.underline)}>
              <div>
                Pickup savings
              </div>
            </div>
            <div className="col-6" style={Object.assign({}, styles.align.right, {color: 'red'})}>
              -$3.85
            </div>
          </div>
        </div>
        <div className="row animated fadeInUp">
          <div 
            className="col-6"
            style={styles.tooltip}>
            Picking up your order in the store helps cut costs, and we pass the savings on to you.
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="animated fadeInDown">
      <div 
        className="row" 
        onClick={e =>
        {
          e.preventDefault()
          onClick(active)
        }}>
        <div className="col-6" style={Object.assign({}, styles.align.left, styles.text.underline)}>
          <div>
            Pickup savings
          </div>
        </div>
        <div className="col-6" style={Object.assign({}, styles.align.right, {color: 'red', fontWeight: 'bold'})}>
          -$3.85
        </div>
      </div>
    </div>
  )
}

TooltipBar.propTypes = 
{
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TooltipBar