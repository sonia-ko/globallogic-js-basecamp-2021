import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import {
  BOOK,
  AUTHOR,
  PERSONAL_RATING,
  READING_STATUS,
  IS_POPULAR,
  DESCRIPTION,
} from '../Helpers/Helpers';

function BooksFormInputs({ initialValues, onSubmit, mode }) {
  const history = useHistory();
  const bookValidationSchema = Yup.object().shape({
    book: Yup.string()
      .min(3, ' The name of the book is too short, it should be at least 3 characters long')
      .max(100, 'The name of the book should be up to 100 characters')
      .required('This field is required, please enter it'),
    author: Yup.string().min(2, 'Please add at least 3 characters here').max(50, 'Too Long!'),
    personal_rating: Yup.number()
      .min(0, 'The mininmum rating is 0')
      .max(10, 'The maximum rating is 10'),
    reading_status: Yup.string().required('This field is required, please enter it'),
    description: Yup.string()
      .min(3, ' The description should be at least 3 characters long')
      .max(900, 'The description should be up to 900 characters')
      .required('This field is required, please enter it'),
  });

  return (
    <Formik
      validationSchema={bookValidationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="book-form">
          <h2>Simple questions about the book...</h2>
          <div className="books-form-questions">
            <div>Please enter a name of the book</div>
            <Field name={BOOK} label={'book'} />
            {errors.book && touched.book ? (
              <div className="error-msg-book-form">{errors.book}</div>
            ) : null}

            <br />

            <div>Please enter the author of the book</div>
            <Field name={AUTHOR} label={'autor'} />
            {errors.author && touched.author ? (
              <div className="error-msg-book-form">{errors.author}</div>
            ) : null}

            <br />
            <div>
              Please rate the book from 0 to 10 (you can skip this one now and add a rating once you
              read the book:
            </div>
            <Field name={PERSONAL_RATING} type="number" />
            {errors.personal_rating && touched.personal_rating ? (
              <div className="error-msg-book-form">{errors.personal_rating}</div>
            ) : null}
            <br />
            <div>
              <label>
                <Field type="checkbox" name={IS_POPULAR}></Field>
                This is a popular book
              </label>{' '}
            </div>

            <br />
            <div role="group" aria-labelledby="my-radio-group">
              <div>Have you read this book? </div>
              <label>
                <Field type="radio" name={READING_STATUS} value="planning" />I have not read the
                book yet, but I am planning to read it really soon 📙
              </label>
              <label>
                <Field type="radio" name={READING_STATUS} value="in progress" />I am reading this
                book right now 📖
              </label>
              <label>
                <Field type="radio" name={READING_STATUS} value="done" />I have already read this
                book 📗
              </label>
              {errors.reading_status && touched.reading_status ? (
                <div className="error-msg-book-form">{errors.reading_status}</div>
              ) : null}
            </div>
            <br />

            <div>Please add a short description of a book:</div>
            <Field as="textarea" name={DESCRIPTION} />
            {errors.description && touched.description ? (
              <div className="error-msg-book-form">{errors.description}</div>
            ) : null}

            <div className="form-btns">
              <button type="submit">Save</button>
              <button type="button" onClick={() => history.push('/books')}>
                Cancel
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default BooksFormInputs;
