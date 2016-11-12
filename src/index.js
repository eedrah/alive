import React from 'react'
import { render } from 'react-dom'

import App from './App'
import verifyHttps from './fns/verifyHttps'

verifyHttps(() => {
  render((<App />), document.querySelector('#app'))
})
