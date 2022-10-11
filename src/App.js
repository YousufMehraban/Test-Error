import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Food from './Food';
import NavBar from './NavBar';
import AdminDashboard from './RedirectComponent';
import AuthUser from './RedirectByHistoryObj';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route path="/food/:name"> <Food /> </Route>
          <Route path="/admin"> <AdminDashboard /> </Route>
          <Route path="/unauth"> <h1>NOT ALLOWED!!!!</h1> </Route>
          <Route path="/auth"> <AuthUser /> </Route>
          <Route path="/"> <h1>HomePage, Naviage to Enjoy haha!!!</h1> </Route>
          <Route > <h1>404 page not found!!!</h1> </Route> 
          <Redirect to='/' />
        </Switch>
    </div>
  );
}

export default App;
