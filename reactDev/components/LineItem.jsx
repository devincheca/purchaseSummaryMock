import React from 'react'
import styles from '../styles.jsx'

const LineItem = (props) => 
(
  <div className="animated fadeInDown">
    <div className="row" style={{fontWeight: props.bold ? 'bold' : ''}}>
      <div className="col-6" style={styles.align.left}>
        <div>
          {props.name}
        </div>
        <div>
          {props.specs}
        </div>
      </div>
      <div className="col-6" style={Object.assign({}, styles.align.right, {color: props.color})}>
        {props.color === 'red' ? '-$' + props.amount : '$' + props.amount}
      </div>
    </div>
  </div>
)

export default LineItem