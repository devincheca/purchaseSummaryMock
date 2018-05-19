import React from 'react'
import styles from '../styles.jsx'
import DiscountedAmount from '../containers/DiscountedAmount.jsx'

const LineItem = (props) => 
{
  if (props.name !== 'Est. total' && props.toolTip === '')
  {
    return (
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
  }
  else if (props.toolTip !== '')
  {
    let renderedTooltip = ''
    function renderTooltip()
    {
      renderedTooltip = props.toolTip
    }
    return (
      <div className="animated fadeInDown">
        <div className="row" onClick={e =>
          {
            renderTooltip(props.toolTip)
          }}
          style={{fontWeight: props.bold ? 'bold' : ''}}>
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
        <div>
          {renderTooltip(props.toolTip)}
        </div>
      </div>
      )
  }
  else
  {
    return (
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
          <DiscountedAmount />
        </div>
      </div>
    </div>
    )
  }
}

export default LineItem