import React from "react";
import './App.css';
import Auth from "../src/auth/auth"
import { Switch, Route } from "react-router-dom"
import Err from "./Error/Error"
import Homepage from "./components/Homepage/Homepage"
import AddQuestion from "./components/AddQuestion/AddQuestion";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/homepage" exact component={Homepage} />
        <Route path="/addquetion" exact component={AddQuestion} />
        <Route path="/*" exact component={Err} />
      </Switch>
    </div>
  );
}

export default App;
