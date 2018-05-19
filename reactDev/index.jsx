// Author: Devin Checa
// 5/18/2018
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import purchaseSummary from './reducers/index.jsx'
import App from './components/App.jsx'
import styles from './styles.jsx'

let store = createStore(purchaseSummary)

render(
  <div>
  <Provider store={store}>
    <App />
  </Provider>
  </div>,
  document.getElementById('root')
)