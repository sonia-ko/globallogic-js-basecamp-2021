import { MODE } from "../../helpers";
import { useHistory } from "react-router-dom";

function ActionButtons({ id, city, setCity }) {
  const history = useHistory();

  const deleteCity = async () => {
    const endpoint = `http://localhost:8080/api/cities/${id}`;
    fetch(endpoint, {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => setCity(""));

    history.push("/cities");
  };

  const redirect = (mode, id) => () => {
    history.push(`/cities/city/${mode}/${id}`);
  };

  return (
    <div className="action-buttons">
      <button onClick={redirect(MODE.EDIT, id)}>Edit</button>
      <button onClick={deleteCity}>Delete</button>
    </div>
  );
}

export default ActionButtons;
