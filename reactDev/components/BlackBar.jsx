import React from 'react'
import styles from '../styles.jsx'

function now() { return (Date() + "").substr(16,2) + ":" + (Date() + "").substr(19,2) }

const BlackBar = () => 
(
  <div className="animated fadeInDown" style={styles.text.subText}>
    <div className="row">
      <div className="col-4" style={styles.align.left}>
        .....
      </div>
      <div className="col-4" style={styles.align.center}>
        { now() }
      </div>
      <div className="col-4" style={styles.align.right}>
      100%🔋
      </div>
    </div>
  </div>
)

export default BlackBar