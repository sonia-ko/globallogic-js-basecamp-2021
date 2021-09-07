import "../../index.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./city.css";
import ActionButtons from "./ActionButtons";

export default function City({ cities, setCities }) {
  const { id } = useParams();
  const [city, setCity] = useState({});

  const endpoint = `http://localhost:8080/api/cities/${id}`;

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((json) => setCity(json.data));
  }, [city, endpoint]);

  function generateYear(year) {
    if (year === 0) {
      return "not specified";
    } else if (year < 0) {
      return `${Math.abs(year)} BC`;
    } else {
      return `${year} year`;
    }
  }

  return (
    <div className="city-section-container">
      <div className="city-header">
        <h2 className="city-section__city-name">Welcome to {city.name}!</h2>
        <ActionButtons city={city} setCity={setCity} id={id}></ActionButtons>
      </div>
      <img src={city.picture} alt="" />

      <ul className="about-city">
        <li>
          🌍 <b>Country</b>: {city.country}
        </li>
        <li>
          📅 <b>Settled</b>: {generateYear(city.settled)}
        </li>
        <li>
          📷 <b>Places</b>: {city.places}
        </li>
        <li>
          📌 <b>Description</b>: {city.description}
        </li>
      </ul>
    </div>
  );
}
