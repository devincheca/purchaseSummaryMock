import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.jsx'

const Menu = ({ active, onClick }) => 
{
  if (active)
  {
    return (
      <div className="animated fadeInDown">
      <button
        className="btn" 
        onClick={e => 
          {
            e.preventDefault()
            onClick(active)
          }}
        style={styles.beige}>
        🔍
      </button>
      <div style={Object.assign({}, styles.beige, styles.black, styles.round)}>
        <input autoFocus
          placeholder="Search"
          style={Object.assign({}, styles.round, { width: '100%' })}>
        </input>
      </div>
    </div>
    )
  }
  return (
    <div className="animated fadeInUp">
      <button
        className="btn" 
        onClick={e => 
          {
            e.preventDefault()
            onClick(active)
          }}
        style={styles.beige}>
        🔍
      </button>
    </div>
  )
}

Menu.propTypes = 
{
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Menu