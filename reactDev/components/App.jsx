import React from 'react'
import DetailsToggle from '../containers/DetailsToggle.jsx'
import LineItem from './LineItem.jsx'
import PromoToggle from '../containers/PromoToggle.jsx'
import styles from '../styles.jsx'

const App = () => 
(
  <div>
    <LineItem 
      amount='102.96'
      bold=''
      color='black'
      name='Subtotal'
      toolTip=''
    />
    <LineItem 
      amount='-$3.85'
      bold=''
      color='red'
      name='Pickup savings'
      toolTip='Picking up your order in the store helps cut costs, and we pass the savings on to you.'
    />
    <LineItem 
      amount='8.92'
      bold=''
      color='black'
      name='Est. taxes & fees\n(Based on 94085)'
      toolTip=''
    />
    <hr></hr>
    <LineItem 
      amount='108.03'
      bold='true'
      color='black'
      name='Est. total'
      toolTip=''
    />
    <DetailsToggle />
    <PromoToggle />
  </div>
)

export default App