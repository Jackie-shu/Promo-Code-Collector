import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Adv from './Adv'
import AllCode from './AllCode'
import { Route, Router } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route path='/' component={Header} />
          <Route path='/' component={Nav} />
          <Route exact path='/' component={Adv} />
          <br />
          <Route path='/codes' component={AllCode} />
          <Route path='/' component={Footer} />
        </Router>
      </>
    )
  }
}

export default App
