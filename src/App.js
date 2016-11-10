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
  componentWillMount () {
    db.ref('/').on('value', (data) => {
      this.setState(data.val())
    })
  }
  render () {
    if (!this.state) {
      return <h1>Loading...</h1>
    }
    const lastMessage = this.state.lastMessages[this.state.lastMessages.length - 1]
    return (
      <div style={styles.page}>
        <h1 style={styles.heading}>Jesse, are you still alive?!!</h1>
        <p style={styles.subheading}>{'Yes, yes I am, as at ' + this.state.lastCheckIn}</p>
        <h2 style={styles.messageHeading}>{'The last message received was at ' + lastMessage.datetime}</h2>
        <p style={styles.message}>{lastMessage.text}</p>
      </div>
    )
  }
}

module.exports = App
