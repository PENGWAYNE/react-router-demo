// 兼容ie
import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import RouterConfig from './router'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <div>title</div>
    <RouterConfig />
    <div>footer</div>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
