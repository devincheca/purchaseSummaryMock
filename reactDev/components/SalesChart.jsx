import React from 'react'
import ChartToggle from '../containers/ChartToggle.jsx'
import styles from '../styles.jsx'

const SalesChart = () => 
(
  <div style={Object.assign({}, styles.text.mainText, styles.align.center)}>
    <ChartToggle filter="DEFAULT" />
  </div>
)

export default SalesChart