import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Registration from "./op/components/usermgt/Registration";
import Login from "./op/components/usermgt/Login";
import Dashboard from "./op/components/Dashboard";
import Room from "./op/components/Room";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   

export const SERVER = "localhost:8080/api";

function App() {  
  return (  
    <Router>    
      <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/Login'} className="nav-link">Login</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/Signup'} className="nav-link">Sign Up</Link>    
              </li>     
              <li className="nav-item">    
                <Link to={'/Dashboard'} className="nav-link">Dashboard</Link>    
              </li>    
            </ul>    
          </div>    
        </nav> <br />    
        <Switch>    
          <Route exact path='/Login' component={Login} />    
          <Route path='/Signup' component={Registration} />    
        </Switch>    
        <Switch>  
          <Route path='/Dashboard' component={Dashboard} />    
          <Route path='/room/:id' component={Room} />  
        </Switch>  
      </div>    
    </Router>   
  );  
}  

ReactDOM.render(
 <App />,
  document.getElementById('root')
);