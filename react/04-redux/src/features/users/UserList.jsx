import PageNotFound from "../../components/PageNotFound/PageNotFound";
import { MODE } from "./constants";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import UsersTable from "./usersTable/UsersTable";
import UserForm from "./usersForm/UserForm";

function UserList() {
  const { path } = useRouteMatch();

  return (
    <div className="App">
      <Switch>
        <Route exact path={`${path}`}>
          <UsersTable />
        </Route>

        <Route
          exact
          path={`${path}/user/:mode(${MODE.CLONE}|${MODE.VIEW}|${MODE.CREATE}|${MODE.EDIT})/:id?`}
        >
          <UserForm />
        </Route>

        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default UserList;
