import React from 'react'
import Radium from 'radium'

const styles = {
  main: {
    'html, body, #app': {
      height: '100%',
      margin: 0,
      padding: 0,
      overflowY: 'auto',
      /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e2eaf2+0,cdddeb+17,a0c2de+34,88b5dc+49,8ec3e6+60,94d5f6+71,88badc+84,6297d4+100 */
      background: 'linear-gradient(135deg, rgba(226,234,242,1) 0%,rgba(205,221,235,1) 17%,rgba(160,194,222,1) 34%,rgba(136,181,220,1) 49%,rgba(142,195,230,1) 60%,rgba(148,213,246,1) 71%,rgba(136,186,220,1) 84%,rgba(98,151,212,1) 100%)'
    },
    h1: {
      margin: 0
    }
  },
  page: {
    margin: '10px auto',
    maxWidth: '400px',
    textAlign: 'center'
  }
}

class Page extends React.Component {
  render () {
    if (!this.props.data || !this.props.data.checkinDatetime) {
      return (
        <div style={styles.page}>
          <Radium.Style rules={styles.main} />
          <h1>Loading...</h1>
        </div>
      )
    }
    return (
      <div style={styles.page}>
        <Radium.Style rules={styles.main} />
        {this.props.children}
      </div>
    )
  }
}
Page.propTypes = {
  children: React.PropTypes.node,
  data: React.PropTypes.shape({
    checkinDatetime: React.PropTypes.string,
    message: React.PropTypes.string
  })
}

module.exports = Radium(Page)
