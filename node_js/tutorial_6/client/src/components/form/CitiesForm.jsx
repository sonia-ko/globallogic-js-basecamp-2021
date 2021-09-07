import "./style.css";
// react imports
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// constants
import { MODE, ID, getInitialValues, getRequestPayload } from "../../helpers";
// components
import CitiesFormInputs from "./CitiesFormInputs";

function CitiesForm({ cities, setCities }) {
  // for the link to be redirected to the correct mode along with the correct id:
  const { mode, id } = useParams();
  const history = useHistory();

  let city = cities.find((city) => city.id === id);

  useEffect(() => {
    if (!city) {
      if (mode === MODE.EDIT) {
        const endpoint = `http://localhost:8080/api/cities/${id}`;
        fetch(endpoint)
          .then((res) => res.json())
          .then((res) => {
            setCities((prevCities) => [...prevCities, res.data]);
          })
          .catch((err) => window.alert(err.message));
      }
    }
  }, [city, id, mode, setCities]);

  async function handleSubmit(values) {
    const payload = getRequestPayload(values);

    try {
      if (mode === MODE.CREATE) {
        const endpoint = "http://localhost:8080/api/cities";
        fetch(endpoint, {
          method: "POST",
          body: JSON.stringify({
            id: payload.id,
            name: payload.name,
            settled: payload.settled,
            picture: payload.picture,
            description: payload.description,
            country: payload.country,
            places: payload.places,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else if (mode === MODE.EDIT) {
        const endpoint = `http://localhost:8080/api/cities/${id}`;
        fetch(endpoint, {
          method: "PUT",
          body: JSON.stringify({
            id: payload.id,
            name: payload.name,
            settled: payload.settled,
            picture: payload.picture,
            description: payload.description,
            country: payload.country,
            places: payload.places,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        console.log(`Failed to execute this request for ${mode} mode`);
      }
    } catch (err) {
      window.alert(err.message);
    }

    history.push("/cities");
  }

  const initialValues = getInitialValues(city);

  return (
    <div className="form-container">
      <CitiesFormInputs
        key={`${mode}:${initialValues[ID]}`}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        mode={mode}
      />
    </div>
  );
}

export default CitiesForm;
