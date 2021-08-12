import { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import { MODE } from '../../constants';
import UsersTable from './UsersTable';
import UserForm from './UserForm';

function Users() {
  const { path } = useRouteMatch();
  const [users, setUsers] = useState([]);
  console.log(users);
  return (
    <div className="App">
      <Switch>
        <Route exact path={path}>
          <UsersTable users={users} setUsers={setUsers} />
        </Route>

        <Route
          exact
          path={`${path}/user/:mode(${MODE.CLONE}|${MODE.VIEW}|${MODE.CREATE}|${MODE.EDIT})/:id?`}
        >
          <UserForm users={users} setUsers={setUsers} />
        </Route>

        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default Users;
