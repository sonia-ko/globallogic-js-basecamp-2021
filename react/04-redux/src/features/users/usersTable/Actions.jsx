import { useRouteMatch, useHistory } from "react-router-dom";
import { MODE } from "../constants";
import { useDispatch } from "react-redux";
import { removeUser } from "../thunks";

function Actions({ id, user }) {
  const dispatch = useDispatch();

  async function deleteUser() {
    dispatch(removeUser(user));
  }

  const { url } = useRouteMatch();
  const history = useHistory();

  const redirect = (mode) => () => {
    history.push(`${url}/user/${mode}/${id}`);
  };

  return (
    <div className="Actions">
      <button onClick={redirect(MODE.VIEW)}>View</button>{" "}
      <button onClick={redirect(MODE.EDIT)}>Edit</button>
      <button onClick={deleteUser}>Delete</button>
      <button onClick={redirect(MODE.CLONE)}>Clone</button>
    </div>
  );
}

export default Actions;
