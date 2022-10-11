import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Food from './URLparameters/Food';
import NavBar from './URLparameters/NavBar';
import AdminDashboard from './Redirecting/RedirectComponent';
import './App.css';
import AuthUser from './Redirecting/RedirectByHistoryObj';

function App() {
  return (
    <div className="App">
        <NavBar />

        <Switch>
          {/* <Route path="/food/burrito"> <Food name="burrito" /> </Route>
          <Route path="/food/shwarma"> <Food name="shwarma" /> </Route>
          <Route path="/food/pizza"> <Food name="pizza" /> </Route>
          <Route path="/food/pasta"> <Food name="pasta" /> </Route>
          <Route path="/food/steak"> <Food name="steak" /> </Route> */}
          
          {/* using URLparameters we avoid code duplication. */}
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
