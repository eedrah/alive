
import React from 'react'
import { render } from 'react-dom'

import CheckinApp from './CheckinApp'
import verifyHttps from './fns/verifyHttps'

verifyHttps(() => {
  render((<CheckinApp />), document.querySelector('#app'))
})
