import React from 'react'
import styles from '../styles.jsx'

const LineItem = (props) => 
(
  <div className="animated fadeInDown" style={styles.text.subText}>
    <div className="row">
      <div className="col-4" style={styles.align.left}>
        {props.name}
      </div>
      <div className="col-4" style={styles.align.center}>
        
      </div>
      <div className="col-4" style={styles.align.right}>
      {props.amount}
      </div>
    </div>
  </div>
)

export default LineItem