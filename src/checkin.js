import React from 'react'
import { render } from 'react-dom'

import CheckinApp from './CheckinApp'

// const isProd = process.env.NODE_ENV === 'production'

render((<CheckinApp />), document.querySelector('#app'))
