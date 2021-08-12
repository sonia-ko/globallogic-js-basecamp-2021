import './style.css';
// react imports
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
// api
import BooksApi from '../BooksFakeAPI/BooksApi';
// constants
import { MODE, ID, getInitialValues, getRequestPayload } from '../Helpers/Helpers';
// components
import BooksFormInputs from './BooksFormInputs';

function BooksForm({ books, setBooks }) {
  // for the link to be redirected to the correct mode along with the correct id:
  const { mode, id } = useParams();
  const history = useHistory();

  const book = books.find(book => book.id === Number(id));

  useEffect(() => {
    if (mode === MODE.EDIT) {
      if (!book) {
        BooksApi.getBook(Number(id))
          .then(book => setBooks(previousState => [...previousState, book]))
          .catch(err => window.alert(err.message));
      }
    }
  }, [id, mode, book, setBooks]);

  async function handleSubmit(values) {
    const payload = getRequestPayload(values);

    try {
      if (mode === MODE.CREATE) {
        await BooksApi.createBook(payload);
      } else if (mode === MODE.EDIT) {
        await BooksApi.editBook(payload);
      } else {
        console.log(`Failed to execute this request for ${mode} mode`);
      }
    } catch (err) {
      window.alert(err.message);
    }

    history.push('/books');
  }

  const initialValues = getInitialValues(book);

  return (
    <BooksFormInputs
      key={`${mode}:${initialValues[ID]}`}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      mode={mode}
    />
  );
}

export default BooksForm;
