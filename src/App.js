import React from 'react'
import Radium from 'radium'

import firebase from './firebase'
import calcDuration from './fns/calcDuration'
import Page from './Page'

const styles = {}

class App extends React.Component {
  componentWillMount () {
    firebase.database().ref('/').on('value', (data) => {
      this.setState(data.val())
    })
  }
  render () {
    return (
      <Page data={this.state}>
        <h1 style={styles.heading}>Jesse, are you still alive?!!</h1>
        <p style={styles.subheading}>{'Yes, yes I am, as of ' + calcDuration(this.state.checkinDatetime) + ' ago.'}</p>
        <h2 style={styles.messageHeading}>The last message received was:</h2>
        <p style={styles.message}>{this.state.message}</p>
      </Page>
    )
  }
}

module.exports = Radium(App)
