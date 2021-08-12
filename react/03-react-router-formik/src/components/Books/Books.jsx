import { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import { MODE } from './Helpers/Helpers';
import BooksTable from './BooksTable/BooksTable';
import BooksForm from './BooksForm/BooksForm';

function Books() {
  const { path } = useRouteMatch();
  const [books, setBooks] = useState([]);

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <BooksTable books={books} setBooks={setBooks} />
        </Route>

        <Route exact path={`${path}/book/:mode(${MODE.CREATE}|${MODE.EDIT})/:id?`}>
          <BooksForm books={books} setBooks={setBooks} />
        </Route>

        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default Books;
