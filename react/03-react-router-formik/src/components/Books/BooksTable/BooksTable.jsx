import { useEffect } from 'react';
import BooksApi from '../BooksFakeAPI/BooksApi';
import AddBookButton from './AddBookButton';
import ActionButtons from './ActionButtons';
import {
  ID,
  BOOK,
  AUTHOR,
  PERSONAL_RATING,
  READING_STATUS,
  IS_POPULAR,
  DESCRIPTION,
} from '../Helpers/Helpers';
import './style.css';

function BooksTable({ books, setBooks }) {
  useEffect(() => {
    BooksApi.getBooks().then(setBooks);
  }, [setBooks]);

  function generateClass(status) {
    if (status === 'done') {
      return 'done';
    } else if (status === 'in progress') {
      return 'in-progress';
    } else {
      return 'planning';
    }
  }
  return (
    <div className="books-table-container">
      <AddBookButton></AddBookButton>
      <table className="books-table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>Rate</th>
            <th>Status</th>
            <th>Popular</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr className={generateClass(book[READING_STATUS])} key={book[ID]}>
              <td>{book[BOOK]}</td>
              <td>{book[AUTHOR]}</td>
              <td>{book[PERSONAL_RATING]}</td>
              <td>{book[READING_STATUS]}</td>
              <td>{book[IS_POPULAR] ? 'yes' : 'no'}</td>
              <td>{book[DESCRIPTION]}</td>
              <td>
                <ActionButtons setBooks={setBooks} id={book[ID]} />{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksTable;
