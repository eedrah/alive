import React from 'react'
import Radium from 'radium'

import firebase from './firebase'
import calcDuration from './fns/calcDuration'

const auth = firebase.auth()
const db = firebase.database()

const EMAIL = 'eedrah@users.noreply.github.com'

class CheckinApp extends React.Component {
  componentWillMount () {
    db.ref('/').on('value', (data) => {
      this.setState(data.val())
    })
    const password = localStorage.password || prompt('Password?')
    auth.signInWithEmailAndPassword(EMAIL, password).then(
      function onResolve (user) {
        db.ref('/checkinDatetime').set(new Date().toJSON())
        localStorage.password = password
        this.setState({ signedIn: true })
      }.bind(this),
      function onReject (error) {
        console.log(error)
        alert('Login failed!')
        delete localStorage.password
      }
    )
  }
  changeMessage (e) {
    db.ref('/message').set(e.target.value)
  }
  render () {
    if (!this.state || !this.state.checkinDatetime || !this.state.message) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
    return (
      <div>
        {'Last checked in ' + calcDuration(this.state.checkinDatetime) + ' ago.'}
        <textarea
          disabled={!this.state.signedIn}
          onChange={this.changeMessage}
          value={this.state.message}
        />
      </div>
    )
  }
}

module.exports = Radium(CheckinApp)
