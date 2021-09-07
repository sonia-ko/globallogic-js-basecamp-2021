import { Switch, Redirect, Route } from "react-router-dom";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Cities from "./components/Cities/Cities";
import City from "./components/city/City";
import Menu from "./components/header/Menu";
import HomePage from "./components/homepage/HomePage";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Menu> </Menu>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/cities">
          <Cities />
        </Route>
        <Route path="/city">
          <City />
        </Route>
        <Route>
          <PageNotFound> </PageNotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
