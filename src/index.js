import React from 'react'
import { render } from 'react-dom'

import App from './App'

// const isProd = process.env.NODE_ENV === 'production'

render((<App />), document.querySelector('#app'))
