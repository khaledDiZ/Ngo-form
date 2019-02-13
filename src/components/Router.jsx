import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../Homepage";
import App from "../App";
import Submited from "./Submited";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/form" component={App} />
      <Route path="/submited" component={Submited} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
