import React from 'react'
import App from './components/App'
import { render } from 'react-dom'
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
render(
    <Router>
  <App />
  </Router>
,document.getElementById('root'))   