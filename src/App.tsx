import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import insurances from './config/insurances'
import BuyPage from './pages/BuyPage'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          {insurances.map((insurance) => (
            <Route
              path={`/buy/:insuranceName`}
              key={`insurance-route-${insurance.id}`}
              component={BuyPage}
            />
          ))}
          <Route path="/">
            <p>Welcome to Getsafe's Insurances:</p>
            {insurances.map((insurance) => (
              <p key={`insurance-link-${insurance.id}`}>
                <Link to={`/buy/${insurance.name}`}>{insurance.title}</Link>
              </p>
            ))}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
