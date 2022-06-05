import React from 'react';
import Home from './pages/Home'
import NewEmployee from './pages/NewEmployee'
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'


class App extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return <Router>
      <Switch>
        <Route path='/create' >
          <NewEmployee />
        </Route>
        <Route path='/home' >
          <Home />
        </Route>
      </Switch>
    </Router>
  }
}

export default App;
