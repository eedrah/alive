import React from 'react'
import Radium from 'radium'

const styles = {
  main: {
    'html, body, #app': {
      height: '100%',
      margin: 0,
      padding: 0,
      backgroundColor: '#EEEEEE'
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
