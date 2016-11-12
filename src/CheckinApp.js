import React from 'react'
import Radium from 'radium'

import db from './db'

class CheckinApp extends React.Component {
  componentWillMount () {
    db.ref('/').on('value', (data) => {
      this.setState(data.val())
    })
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
        Check in!!
      </div>
    )
  }
}

module.exports = Radium(CheckinApp)
