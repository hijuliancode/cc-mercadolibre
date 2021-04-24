import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './scss/main.scss'
import { Home } from './pages/Home'
import { Results } from './pages/Results'
import { ProductDetail } from './pages/ProductDetail'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route
            exact
            path='/items/'
            component={Results}
          />
          <Route
            exact
            path='/results/'
            component={Results}
          />
          <Route
            exact
            path='/items/:id'
            component={ProductDetail}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App
