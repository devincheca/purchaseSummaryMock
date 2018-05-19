import React from 'react'
import DetailsToggle from '../containers/DetailsToggle.jsx'
import LineItem from './LineItem.jsx'
import PromoToggle from '../containers/PromoToggle.jsx'
import styles from '../styles.jsx'
import TooltipToggle from '../containers/TooltipToggle.jsx';

const App = () => 
(
  <div>
    <LineItem 
      amount='102.96'
      color='black'
      name='Subtotal'
    />
    <TooltipToggle />
    <LineItem 
      amount='8.92'
      color='black'
      name='Est. taxes & fees'
      specs='(Based on 94085)'
    />
    <hr></hr>
    <LineItem 
      amount='108.03'
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