export const ID = 'id';
export const BOOK = 'book'; // string - required
export const AUTHOR = 'author'; // string - not required
export const PERSONAL_RATING = 'personal_rating'; // number: 0 - 10 - not required
export const READING_STATUS = 'reading_status'; // pre-defined [done, planning, in progress] (radiobutton)
export const IS_POPULAR = 'is_popular'; // boolean (checkbox) - not required
export const DESCRIPTION = 'description'; // string  - required


export const INITIAL_STATE = {
  [BOOK]: '',
  [AUTHOR]: '',
  [PERSONAL_RATING]: '',
  [READING_STATUS]: '',
  [IS_POPULAR]: '',
  [DESCRIPTION]: '',
};

export const MODE = {
  CREATE: 'create',
  EDIT: 'edit',
};

export const getInitialValues = book => (book ? book : INITIAL_STATE);

export const getRequestPayload = values => {
  return {
    id: values.id,
    book: values.book,
    author: values.author,
    personal_rating: values.personal_rating,
    reading_status: values.reading_status,
    is_popular: values.is_popular,
    description: values.description,
  };
};
