import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Component/Home";
import About from "./Component/About";
import Solutions from "./Component/Solutions";
import Contact from "./Component/Contact";
import Main from "./Navigation/Main";
import Cctv from "./Component/Cctv";
import Fire from "./Component/Fire";
import Public from "./Component/Public";
import Building from "./Component/Building";
import AccessControl from "./Component/AccessControl";
import PhysicalSecurity from "./Component/PhysicalSecurity";
import Boardroom from "./Component/Boardroom";
import Networking from "./Component/Networking";
import Ourclients from "./Component/Ourclients";
// import Ploader from "./Component/Ploader";


function App() {
  return (
    <div>
      {/* <Ploader /> */}
      <Main />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/solutions" exact>
          <Solutions />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/cctv">
          <Cctv />
        </Route>
        <Route path="/fire">
          <Fire />
        </Route>
        <Route path="/public address">
          <Public />
        </Route>
        <Route path="/building">
          <Building />
        </Route>
        <Route path="/access control system">
          <AccessControl />
        </Route>
        <Route path="/physical security system">
          <PhysicalSecurity />
        </Route>
        <Route path="/boardroom sysyem">
          <Boardroom />
        </Route>
        <Route path="/it & networking sysyems">
          <Networking />
        </Route>
        <Route path="/our clients">
          <Ourclients />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
