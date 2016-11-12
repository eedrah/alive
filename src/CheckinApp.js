import React from 'react'
import Radium from 'radium'

import db from './db'
import calcDuration from './fns/calcDuration'

class CheckinApp extends React.Component {
  componentWillMount () {
    db.ref('/').on('value', (data) => {
      this.setState(data.val())
    })
    db.ref('/lastCheckIn').set(new Date().toJSON())
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
