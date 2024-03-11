import "./index.css";
import { Route, Switch } from "wouter";
import Layout from "./components/layout/Layout";
import Home from "./routes/Home";
import User from "./routes/User";
import Collections from "./routes/Collections";
import Token from "./routes/Token";

function App() {
  let host = window.location.host;
  let parts = host.split(".");

  if (parts.length >= 2) {
    return (
      <Switch>
        <Layout>
          <Route path="/:id">
            <Token subdomain={parts[0]} />
          </Route>
          <Route path="/">
            <Collections subdomain={parts[0]} />
          </Route>
        </Layout>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/user*">
        <User />
      </Route>
      <Route path="/" nest>
        <Layout>
          <Home />
        </Layout>
      </Route>
    </Switch>
  );
}

export default App;
