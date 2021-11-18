import React from "react";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router.js";

function App(props) {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          />
        </Switch>
      </Router>
  );
}

export default App;
