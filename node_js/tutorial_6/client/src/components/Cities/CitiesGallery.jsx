import { useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { MODE } from "../../helpers";
import AddNewCityBtn from "./AddNewCityBtn";
import "./Cities.css";

function CitiesGallery({ cities, setCities }) {
  const endpoint = "http://localhost:8080/api/cities";

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => setCities(json.data));
  }, [setCities]);

  const { url } = useRouteMatch();
  const history = useHistory();

  const redirect = (mode, id) => () => {
    history.push(`${url}/city/${mode}/${id}`);
  };

  return (
    <div>
      <div className="pictures-list">
        <AddNewCityBtn> </AddNewCityBtn>

        <div className="gallery">
          {cities.map((city) => (
            <div
              onClick={redirect(MODE.VIEW, city.id)}
              className="pet-image-container"
              key={`${city.name}-${city.id}`}
            >
              <img src={city.picture} alt={`${city.name} `} />
              <div className="city-name">
                {city.name}, {city.country}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CitiesGallery;
