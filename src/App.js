import React from 'react'
import Radium from 'radium'

import firebase from './firebase'
import calcDuration from './fns/calcDuration'
import Page from './Page'

class App extends React.Component {
  componentWillMount () {
    firebase.database().ref('/').on('value', (data) => {
      this.setState(data.val())
    })
  }
  render () {
    const checkin = calcDuration(this.state.checkinDatetime)

    const lastCheckin = <p>{'I last checked in ' + checkin + ' ago.'}</p>
    let status
    if (checkin.milliseconds < 1000 * 60 * 60 * 24 * 3) {
      status = (
        <div>
          <h2>Yes! Yes I am!</h2>
          {lastCheckin}
        </div>
      )
    } else {
      status = (
        <div>
          <h2>Er... probably</h2>
          {lastCheckin}
          <p>But don't panic! Talk to my Mum or Hemant Passi first!</p>
        </div>
      )
    }

    let message
    if (this.state.message) {
      message = (
        <div>
          <h3>The last message received was:</h3>
          <p style={{ fontStyle: 'italic' }}>{this.state.message}</p>
        </div>
      )
    } else {
      message = (
        <h3>Right now there is no attached message</h3>
      )
    }

    return (
      <Page data={this.state}>
        <h1>Jesse, are you still alive?!!</h1>
        {status}
        {message}
      </Page>
    )
  }
}

module.exports = Radium(App)
