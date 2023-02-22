import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/app/App'
import Service from './components/services/Service'

import './styles/index.css'

const service = new Service()

service.getAllItems().then((res) => console.log(res))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
