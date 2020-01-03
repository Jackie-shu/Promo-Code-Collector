import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Adv from './Adv'
import AllCode from './AllCode'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Router> */}
          <Route path='/' component={Header} />
          <Route path='/' component={Nav} />
          <Route exact path='/' component={Adv} />
          <Switch>
            <Route exact path='/codes' component={AllCode} />
            
          </Switch>
          <Route path='/' component={Footer} />
        {/* </Router> */}
      </div>
    )
  }
}

export default App
