import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.jsx'

const Sales = ({ header, dollars }) => 
(
  <div className="animated zoomIn"style={styles.text.mainText}>
    <h1 style={Object.assign({}, styles.text.mainText, styles.align.center, {fontWeight: 'normal'})}>{header}</h1>
    <div style={Object.assign({}, styles.text.subText, styles.align.center)}>{dollars}</div>
  </div>
)

Sales.propTypes = 
{
  header: PropTypes.any.isRequired,
  dollars: PropTypes.any.isRequired,
}

export default Sales