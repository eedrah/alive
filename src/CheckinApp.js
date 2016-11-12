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
        db.ref('/lastCheckIn').set(new Date().toJSON())
        localStorage.password = password
      },
      function onReject (error) {
        console.log(error)
        alert('Login failed!')
        delete localStorage.password
      }
    )
  }
  render () {
    if (!this.state || !this.state.lastCheckIn || !this.state.lastMessages) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
    return (
      <div>
        {'Last checked in ' + calcDuration(this.state.lastCheckIn) + ' ago.'}
      </div>
    )
  }
}

module.exports = Radium(CheckinApp)
