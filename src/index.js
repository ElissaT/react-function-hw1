import React from "react";
import ReactDOM from "react-dom";

import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Add5 from "./components/add5";
import AlphaStr from "./components/alphastr";
import EvenOdd from "./components/evenodd";
import FirstLast from "./components/firstlast";
import Pal from "./components/pal";
import RevSent from "./components/revsent";
import RevStr from "./components/revstr";
import NavigationComponent from "./components/navbar";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <h1>Click on the project you would like to view</h1>
        <NavigationComponent />
        <div>
          <Switch>
            <Route path="/add5" component={Add5} />
            <Route path="/alphastr" component={AlphaStr} />
            <Route path="/evenodd" component={EvenOdd} />
            <Route path="/firstlast" component={FirstLast} />
            <Route path="/pal" component={Pal} />
            <Route path="/revsent" component={RevSent} />
            <Route path="/revstr" component={RevStr} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
