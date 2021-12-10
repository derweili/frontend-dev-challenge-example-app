import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow from './buyflow/Buyflow'
import insturances from './config/Insurances'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          {insturances.map((insurance) => (
            <Route path={`/buy/${insurance.name}`}>
              <Buyflow insurance={insurance} />
            </Route>
          ))}
          <Route path="/">
            <p>Welcome to Getsafe's Insurances:</p>
            {insturances.map((insurance) => (
              <p>
                <Link to={`/buy/${insurance.name}`}>{insurance.title} !</Link>
              </p>
            ))}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
