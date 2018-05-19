import React from 'react'
import BlackBar from './BlackBar.jsx'
import Chart from './Chart.jsx'
import Dashboard from './Dashboard.jsx'
import OrderBar from './OrderBar.jsx'
import SalesChart from './SalesChart.jsx'
import SalesTable from './SalesTable.jsx'
import styles from '../styles.jsx'
import TimeBar from './TimeBar.jsx'
import Sales from './Sales.jsx'

const App = () => 
(
  <div>
    <BlackBar />
    <br />
    <Dashboard />
    <br />
    <TimeBar />
    <br />
    <OrderBar />
    <br />
    <Sales 
      header="Total Sales"
      dollars="$448.50"/>
    <br />
    <SalesChart />
    <br />
    <div style={styles.align.center}>
    <Chart 
      source={
      {
        location: 'images/ring.jpg',
      }}
      />
    </div>
    <br />
    <Sales 
      header="Sales"
      dollars="135"/>
    <br />
    <SalesTable />
  </div>
)

export default App