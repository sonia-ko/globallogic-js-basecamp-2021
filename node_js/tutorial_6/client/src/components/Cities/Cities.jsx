import "../../index.css";
import { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PageNotFound from "../pageNotFound/PageNotFound";
import CitiesGallery from "./CitiesGallery";
import { MODE } from "../../helpers";
import CitiesForm from "../form/CitiesForm";
import City from "../city/City";

function Cities() {
  const { path } = useRouteMatch();
  const [cities, setCities] = useState([]);

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <CitiesGallery cities={cities} setCities={setCities} />
        </Route>

        <Route
          exact
          path={`${path}/city/:mode(${MODE.CREATE}|${MODE.EDIT})/:id?`}
        >
          <CitiesForm cities={cities} setCities={setCities} />
        </Route>

        <Route exact path={`${path}/city/:mode(${MODE.VIEW})/:id?`}>
          <City cities={cities} setCities={setCities} />
        </Route>

        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default Cities;
