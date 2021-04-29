import React from 'react'
import Product from "./Product/App"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';
import Sign_in from "./signIn/Sign_in"
import Navbar from "./nav/nav"

function App() {
  return (
  <>
   <div>
        <Router>
        <Navbar/>
          <Switch>          
              <Route path='/Product' component={Product}/>
              <Route path='/' component={Sign_in}/>
          </Switch>
      </Router>
  </div>
  </>
  );
}

export default App;
