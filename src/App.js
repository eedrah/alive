import React from 'react'

import db from './db'

const styles = {
  page: {
    'backgroundColor': '#804080'
  },
  heading: {
    'color': '#A02020'
  },
  subheading: {
    'color': '#2020A0'
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { lastCheckIn: null }
  }
  componentWillMount () {
    db.ref('lastCheckIn').on('value', (data) => {
      this.setState({
        lastCheckIn: data.val()
      })
    })
  }
  render () {
    return (
      <div style={styles.page}>
        <h1 style={styles.heading}>Jesse, are you still alive?!!</h1>
        <p style={styles.subheading}>{'Yes, yes I am, as at ' + this.state.lastCheckIn}</p>
      </div>
    )
  }
}

module.exports = App
