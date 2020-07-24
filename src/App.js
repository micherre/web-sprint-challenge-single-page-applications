import React from "react";
import { Switch, Route } from 'react-router-dom'
import Form from './Components/Form'
import Navigation from "./Components/Navigation"
import Complete from "./Components/Complete"
import Home from "./Components/Home"
import "./App.css"



const App = () => {
  return(
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/complete">
          <Complete />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    )
};
export default App;
