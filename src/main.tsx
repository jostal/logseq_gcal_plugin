import '@logseq/libs'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import LoginContext from "./store/User";

const isDevelopment = import.meta.env.DEV

if (isDevelopment) {
  renderApp('browser')
} else {
  console.log('=== logseq-gcal loaded ===')
  logseq.ready(() => {

    logseq.provideModel({
      show() {
        renderApp('logseq')
        logseq.showMainUI()
      },
    })

    logseq.App.registerUIItem('toolbar', {
      key: 'logseq-gcal',
      template: '<a data-on-click="show" class="button"><i class="ti ti-calendar"></i></a>',
    })

  })
}

function renderApp(env: string) {
  ReactDOM.render(
    <React.StrictMode>
      <LoginContext children={<App env={env} />} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
