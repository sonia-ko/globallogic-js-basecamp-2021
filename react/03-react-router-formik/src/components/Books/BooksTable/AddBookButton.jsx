import { useRouteMatch, Link } from 'react-router-dom';
import { MODE } from '../Helpers/Helpers';
import './style.css';

function AddBookButton() {
  const { url } = useRouteMatch();
  return (
    <div className="add-book-btn-container">
      <div className="add-book-button-description">
        <h1>Books table</h1>
        Hi there! Here you can add any book of your choise 📚 You may add your favourite books or
        the books that you are planning to read in the future. Once you are done with the book, feel
        free to mark it accordingly using the Edit button (finished books are marked with the green
        color in the table)
      </div>
      <button className="add-book-btn">
        <Link to={`${url}/book/${MODE.CREATE}`}>Add a book</Link>
      </button>
    </div>
  );
}

export default AddBookButton;
