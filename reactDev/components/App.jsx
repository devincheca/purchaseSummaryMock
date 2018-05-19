import React from 'react'
import data from '../data.jsx'
import DetailsToggle from '../containers/DetailsToggle.jsx'
import LineItem from './LineItem.jsx'
import PromoToggle from '../containers/PromoToggle.jsx'
import styles from '../styles.jsx'
import TooltipToggle from '../containers/TooltipToggle.jsx'

const App = () => 
(
  <div>
    <LineItem 
      amount={data.subtotal}
      color='black'
      name='Subtotal'
    />
    <TooltipToggle />
    <LineItem 
      amount={data.taxesFees}
      color='black'
      name='Est. taxes & fees'
      specs='(Based on 94085)'
    />
    <hr></hr>
    <LineItem 
      amount={data.estimatedTotal}
      bold='true'
      color='black'
      name='Est. total'
    />
    <DetailsToggle />
    <hr></hr>
    <PromoToggle />
  </div>
)

export default App