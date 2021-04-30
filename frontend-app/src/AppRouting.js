import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Results } from './pages/Results'
import { ProductDetail } from './pages/ProductDetail'
import { NotFound } from './pages/NotFound'

export const AppRouting = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/results' component={Results} />
        <Route exact path='/items' component={Results} />
        <Route exact path='/items/:id' component={ProductDetail} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  )
}