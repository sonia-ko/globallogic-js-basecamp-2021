import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalLoadingSpinner from "./components/loading/GlobalLoadingSpinner";
import UserList from "./features/users/UserList";
import Header from "./components/header/header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import TodoList from "./features/todoList/TodoList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header> </Header>
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route
            path="/users"
            render={() => (
              <React.Fragment>
                <UserList />
              </React.Fragment>
            )}
          />
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route>
            <PageNotFound> </PageNotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
