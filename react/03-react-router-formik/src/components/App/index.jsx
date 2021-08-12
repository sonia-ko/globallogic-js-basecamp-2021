import { Switch, Redirect, Route } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import Users from '../Users';
import Header from '../Header/header';
import Books from '../Books/Books';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Redirect exact from="/" to="/users" />

        <Route path="/users">
          <Users />
        </Route>

        <Route path="/books">
          <Books />
        </Route>

        <Route>
          <PageNotFound></PageNotFound>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
