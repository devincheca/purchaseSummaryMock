import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.jsx'
import {Bar} from 'react-chartjs-2'

const Chart = ({ source }) => 
{
  if (source.location === 'images/ring.jpg')
  {
    return (
      <img className="img-fluid animated slideInDown" style={styles.orchid.orchidBorder} src={source.location} />
    )
  }
  else
  {
    window.Chart.defaults.global.defaultFontColor = 'beige'
    return (
      <div 
        className="animated slideInDown mx-auto" 
        style={Object.assign({}, styles.orchid.orchidBorder, styles.align.center, { maxWidth: '555px' })}>
        <Bar
          data={source.data}
          options={{}}
        />
      </div>
  )}
}

Chart.propTypes = 
{
  source: PropTypes.object.isRequired,
}

export default Chart