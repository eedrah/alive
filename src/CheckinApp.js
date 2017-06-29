import React from 'react'
import Radium from 'radium'
import debounce from 'debounce'

import firebase from './firebase'
import calcDuration from './fns/calcDuration'
import Page from './Page'

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
    return (
      <Page data={this.state}>
        <h1>{'Last checked in ' + calcDuration(this.state.checkinDatetime) + ' ago.'}</h1>
        <h2>Current message:</h2>
        <textarea
          disabled={!this.state.signedIn}
          onChange={debounce(this.changeMessage, 500, true)}
          value={this.state.message}
          style={{
            width: '100%',
            minHeight: '30em'
          }}
        />
      </Page>
    )
  }
}

module.exports = Radium(CheckinApp)
