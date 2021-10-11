import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Content from "./pages/content/content";
import Contest from "./pages/contest/contest";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
          <Route exact path="/contest">
          <Contest />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
