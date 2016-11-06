import React from 'react'

const styles = {
  page: {
    'background-color': '#804080'
  },
  heading: {
    'color': '#A02020'
  },
  subheading: {
    'color': '#2020A0'
  }
}

class App extends React.Component {
  render () {
    return (
      <div style={styles.page}>
        <h1 style={styles.heading}>Jesse, are you still alive?!!</h1>
        <p style={styles.subheading}>Yes, yes I am</p>
      </div>
    )
  }
}

module.exports = App
