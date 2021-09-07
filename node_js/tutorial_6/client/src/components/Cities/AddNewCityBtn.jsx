import { useRouteMatch, Link } from "react-router-dom";
import { MODE } from "../../helpers";

function AddNewCityBtn() {
  const { url } = useRouteMatch();

  return (
    <button className="add-new-city-btn">
      <Link to={`${url}/city/${MODE.CREATE}`}>Add new city</Link>
    </button>
  );
}

export default AddNewCityBtn;
