import { useRouteMatch, useHistory } from 'react-router-dom';

import { MODE } from '../../../../constants';
import userApi from '../../../../api/userApi';

function Actions({ id, setUsers }) {
  async function deleteUser() {
    await userApi.deleteUser(await userApi.getUser(id));
    const rest = await userApi.getUsers();
    setUsers([...rest]);
  }

  const { url } = useRouteMatch();
  const history = useHistory();

  const redirect = mode => () => {
    history.push(`${url}/user/${mode}/${id}`);
  };

  return (
    <div className="Actions">
      <button onClick={redirect(MODE.VIEW)}>View</button>{' '}
      <button onClick={redirect(MODE.EDIT)}>Edit</button>
      <button onClick={deleteUser}>Delete</button>
      <button onClick={redirect(MODE.CLONE)}>Clone</button>
    </div>
  );
}

export default Actions;
