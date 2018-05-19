import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.jsx'

const TimeButton = ({ active, children, onClick }) => 
{
  if (active) 
  {
    return (
      <div className="mx-auto"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}>
      <button className="animated fadeIn btn" style={styles.beige}>
        {children}
      </button>
    </div>
    )
  }
  return (
    <div className="mx-auto"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}>
      <button className="btn btn-outline-warning" style={Object.assign({}, styles.beigeBorder, styles.text.whiteText)}>
        {children}
      </button>
    </div>
  )
}

TimeButton.propTypes = 
{
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default TimeButton