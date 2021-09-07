import { nanoid } from "nanoid";

export const MODE = {
  CREATE: "create",
  EDIT: "edit",
  VIEW: "view",
};

export const ID = "id";
export const NAME = "name"; // string - required
export const SETTLED = "settled"; // number - not required
export const PICTURE = "picture"; // string - required
export const PLACES = "places"; // string - not required
export const DESCRIPTION = "description"; // string required
export const COUNTRY = "country"; // string  - required

export const INITIAL_STATE = {
  [NAME]: "",
  [SETTLED]: "",
  [PICTURE]: "",
  [PLACES]: "",
  [DESCRIPTION]: "",
  [COUNTRY]: "",
};

export const getInitialValues = (city) => (city ? city : INITIAL_STATE);

export const getRequestPayload = (values) => {
  return {
    id: nanoid(),
    name: values.name,
    settled: values.settled || 0,
    picture: values.picture,
    places:
      values.places ||
      "no favourite places. You can add them by clicking on the Edit button",
    description: values.description,
    country: values.country,
  };
};
