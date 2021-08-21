import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MODE, ID, USERNAME, ROLE, TIMESTAMP, AGE } from "../constants";
import { useRouteMatch, Link } from "react-router-dom";
import { timeConverter } from "../converter";
import Actions from "./Actions";
import "./style.scss";
import GlobalLoadingSpinner from "../../../components/loading/GlobalLoadingSpinner";
import { fetchUsers } from "../thunks";

function UsersTable() {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.usersFetched);

  useEffect(() => {
    if (!status) {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div className="UsersTable">
      <Link to={`${url}/user/${MODE.CREATE}`}>Create User</Link>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Age</th>
            <th>Role</th>
            <th>Last Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user[ID]}>
              <td>{user[ID]}</td>
              <td>{user[USERNAME]}</td>
              <td>{user[AGE]}</td>
              <td>{user[ROLE]}</td>
              <td>{timeConverter(user[TIMESTAMP])}</td>
              <td>
                <Actions user={user} id={user[ID]} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={status ? "hidden" : "regular"}>
        <GlobalLoadingSpinner></GlobalLoadingSpinner>
      </div>
    </div>
  );
}

export default UsersTable;
