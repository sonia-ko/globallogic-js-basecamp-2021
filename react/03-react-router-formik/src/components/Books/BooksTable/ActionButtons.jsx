import { MODE } from '../Helpers/Helpers';
import BooksApi from '../BooksFakeAPI/BooksApi';
import { useRouteMatch, useHistory } from 'react-router-dom';

function ActionButtons({ id, setBooks }) {
  const deleteBook = async () => {
    await BooksApi.deleteBook(await BooksApi.getBook(id));
    const restOfBooks = await BooksApi.getBooks();
    setBooks([...restOfBooks]);
  };

  const { url } = useRouteMatch();
  const history = useHistory();

  const redirect = mode => () => {
    history.push(`${url}/book/${mode}/${id}`);
  };

  return (
    <div>
      <button onClick={redirect(MODE.EDIT)}>Edit</button>
      <button onClick={deleteBook}>Delete</button>
    </div>
  );
}

export default ActionButtons;
