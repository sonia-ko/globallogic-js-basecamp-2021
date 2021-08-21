import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";
import {
  getUser,
  fetchRoles,
  createUser,
  updateUser,
  fetchUsers,
} from "../thunks";
import FormContainer from "./FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { MODE, ID } from "../constants";
import { getRequestPayload, getInitialValues } from "../converter";
import GlobalLoadingSpinner from "../../../components/loading/GlobalLoadingSpinner";

function UserForm() {
  const { mode, id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.usersFetched);
  const user = users.find((user) => user.id === Number(id));
  const roles = useSelector((state) => state.users.roles);
  const rolesFetched = useSelector((state) => state.users.rolesFetched);

  useEffect(() => {
    if (mode === MODE.VIEW || mode === MODE.EDIT || mode === MODE.CLONE) {
      if (!user) {
        dispatch(getUser(Number(id)));
      }
    }
    if (!status) {
      dispatch(fetchUsers());
    }
  }, [user, id, mode, status, dispatch]);

  useEffect(() => {
    if (mode) {
      if (!rolesFetched) {
        dispatch(fetchRoles());
      }
    }
  }, [mode, rolesFetched, dispatch]);

  const handleSubmit = async (values) => {
    try {
      const payload = getRequestPayload(values);
      switch (mode) {
        case MODE.CREATE:
          await dispatch(createUser(payload));
          break;
        case MODE.EDIT:
          await dispatch(updateUser(payload));
          break;
        case MODE.CLONE:
          await dispatch(createUser(payload));
          break;
        default:
          console.error(`Failed to execute this request for ${mode} mode`);
      }
    } catch (err) {
      window.alert(err.message);
    }

    history.push("/users");
  };

  const initialValues = getInitialValues(user);

  return (
    <>
      <FormContainer
        key={`${mode}:${initialValues[ID]}`}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        mode={mode}
        roles={roles}
      />
      <div className={status ? "hidden" : "regular"}>
        <GlobalLoadingSpinner></GlobalLoadingSpinner>
      </div>
    </>
  );
}

export default UserForm;
