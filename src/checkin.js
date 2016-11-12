import React from 'react'
import { render } from 'react-dom'

import CheckinApp from './CheckinApp'

const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
  if ((window.location.host === 'eedrah.com') && (window.location.protocol !== 'https:')) {
    window.location.protocol = 'https'
  }
}

render((<CheckinApp />), document.querySelector('#app'))
