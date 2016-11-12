import React from 'react'
import { render } from 'react-dom'

import App from './App'

const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
  if ((window.location.host === 'eedrah.com') && (window.location.protocol !== 'https:')) {
    window.location.protocol = 'https'
  }
}

render((<App />), document.querySelector('#app'))
