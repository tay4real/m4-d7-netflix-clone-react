import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import NavBar from './components/NavBar'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MovieDetails from './components/MovieDetails'

class App extends React.Component {
  render() {
    return (
    
        <Router>
          <NavBar />
          <Route
            path="/"
            exact
           
            render={(
              props // props are history, location, match
            ) => <Home  {...props} />} // in this way you can pass your own props along with the router ones
          />
         
          <Route path="/details/:id" component={MovieDetails} />
          <Route path="/tvshows" exact component={MovieDetails} />
          <Route path="/movies" exact component={MovieDetails} />
          <Route path="/recent" exact component={MovieDetails} />
          <Route path="/mylist" exact component={MovieDetails} />
        </Router>
     
    )
  }
}

export default App
