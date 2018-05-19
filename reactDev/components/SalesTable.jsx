import React from 'react'
import styles from '../styles.jsx'

const SalesTable = () => 
(
  <div className="container animated slideInUp" style={styles.text.subText}>
    <div className="row">
      <div className="col-4" style={styles.align.right}>
        <ul><li style={styles.coral}></li></ul>
      </div>
      <div className="col-4" style={styles.align.left}>
        Hoodie
      </div>
      <div className="col-4" style={styles.align.right}>
        $74.00
      </div>
    </div>
    <div className="row">
      <div className="col-4" style={styles.align.left}>
        <ul><li style={styles.gold}></li></ul>
      </div>
      <div className="col-4" style={styles.align.left}>
        Fitted Cap
      </div>
      <div className="col-4" style={styles.align.right}>
        $69.50
      </div>
    </div>
    <div className="row">
      <div className="col-4" style={styles.align.left}>
      <ul><li style={styles.cyan}></li></ul>
      </div>
      <div className="col-4" style={styles.align.left}>
        Bracelet
      </div>
      <div className="col-4" style={styles.align.right}>
        $39.05
      </div>
    </div>
  </div>
)

export default SalesTable