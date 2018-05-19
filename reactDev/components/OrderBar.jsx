import React from 'react'
import styles from '../styles.jsx'

const OrderData = 
{
  "orders": 135,
  "completedOrders": 124
}

function orderPercent(orders)
{
  return '' + 100 * (orders.completedOrders / (orders.completedOrders + orders.orders)) + '%'
}

const OrderBar = () => 
(
  <div className="animated zoomIn">
    <div className="container">
      <div className="progress" style={styles.statusBar}>
        <div className="progress-bar" 
          style=
          {
            Object.assign
            (
              {}, 
              styles.orchid.Orchid, 
              { width: orderPercent(OrderData) }
            )}>
        </div>
      </div>
      <div className="row">
        <div className="col-6" style={Object.assign({}, styles.text.plainText, styles.align.left)}>
          Orders
        </div>
        <div className="col-6" style={Object.assign({}, styles.text.plainText, styles.align.right)}>
          Completed Orders
        </div>
      </div>
      <div className="row">
        <div className="col-6" style={Object.assign({}, styles.orchid.orchidText, styles.align.left)}>
          {OrderData.orders}
        </div>
        <div className="col-6" style={Object.assign({}, styles.orchid.orchidText, styles.align.right)}>
          {OrderData.completedOrders}
        </div>
      </div>
    </div>
  </div>
)

export default OrderBar