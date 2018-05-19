import React from 'react'
import TimeToggle from '../containers/TimeToggle.jsx'
import styles from '../styles.jsx'

const TimeBar = () => 
(
  <div style={Object.assign({}, styles.text.mainText, styles.align.center)}>
    <div className="row animated zoomInUp">
      <TimeToggle filter="TODAY">
        TODAY
      </TimeToggle>
      <TimeToggle  filter="WEEK">
        WEEK
      </TimeToggle>
      <TimeToggle filter="MONTH">
        MONTH
      </TimeToggle>
    </div>
  </div>
)

export default TimeBar