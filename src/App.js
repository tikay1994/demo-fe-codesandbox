import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./components/menu";
import Home from "./components/home";
import Footer from "./components/footer";
import Login from "./components/login";
import Product from "./components/product";
function App() {
  return (
    <Router>
      <div className="App bg-black text white">
        <Menu />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
