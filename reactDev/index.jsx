// Author: Devin Checa
// 1/2/2017
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import dashboardApp from './reducers/index.jsx'
import App from './components/App.jsx'
import styles from './styles.jsx'

let store = createStore(dashboardApp)

render(
  <div style={styles.mainBackground}>
  <Provider store={store}>
    <App />
  </Provider>
  </div>,
  document.getElementById('root')
)