import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home/home.component";
import Portfolio from "../src/pages/portfolio/portfolio.component";
import Error from "../src/pages/error/error.component";
import Links from "../src/components/links/links.component";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      // Inside here we define our routes
      // Put <Links /> under BrowserRouter
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
