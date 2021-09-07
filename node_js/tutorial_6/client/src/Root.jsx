import { BrowserRouter as Router } from "react-router-dom";

function Root({ children }) {
  return <Router>{children}</Router>;
}

export default Root;
