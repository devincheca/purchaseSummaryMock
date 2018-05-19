import React from 'react'
import BurgerToggle from '../containers/BurgerToggle.jsx'
import SearchToggle from '../containers/SearchToggle.jsx'
import styles from '../styles.jsx'

const Dashboard = () => 
(
  <div style={styles.text.mainText}>
    <div className="row">
      <div className="col-4" style={styles.align.left}>
        <BurgerToggle />
      </div>
      <div className="col-4 animated zoomIn" style={styles.align.center}>
        DASHBOARD
      </div>
      <div className="col-4" style={styles.align.right}>
        <SearchToggle />
      </div>
    </div>
  </div>
)

export default Dashboard