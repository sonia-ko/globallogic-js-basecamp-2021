import { INITIAL_STATE } from "./constants";

export const getInitialValues = (user) => (user ? user : INITIAL_STATE);

export const timeConverter = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${year}/${month}/${day} ${hours}:${minutes.substr(
    -2
  )}`;
  return formattedTime;
};

export const getRequestPayload = (values) => {
  return {
    ...values,
    age: +values.age,
  };
};
