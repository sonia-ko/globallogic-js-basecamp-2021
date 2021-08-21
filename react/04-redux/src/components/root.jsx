import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../app/store";

function Root({ children }) {
  return (
    <Provider store={store}>
      <Router basename="/globallogic-js-basecamp-2021/react/04-redux/build/">
        {children}
      </Router>
      {/* <Router>{children}</Router> */}
    </Provider>
  );
}

export default Root;
