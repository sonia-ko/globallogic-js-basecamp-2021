import { wait, createGetId, throwError } from '../../../api/utisl';
import data from './Books';

const getId = createGetId(data.length);

const api = {
  async getBooks() {
    await wait(1000);
    return data;
  },

  async getBook(id) {
    await wait();
    const book = data.find(book => book.id === id);

    if (book) {
      return book;
    } else {
      throwError(id);
    }
  },
  async createBook(book) {
    await wait();

    const newBook = {
      ...book,
      id: getId(),
    };

    data.push(newBook);

    return newBook;
  },

  async editBook(book) {
    await wait();
    const index = data.findIndex(b => b.id === book.id);

    if (~index) {
      data[index] = {
        ...book,
      };

      return data[index];
    } else {
      throwError(book.id);
    }
  },

  async deleteBook(book) {
    await wait();

    const index = data.findIndex(b => b.id === book.id);

    if (~index) {
      return data.splice(index, 1);
    } else {
      throwError(book.id);
    }
  },
  // GET /roles
  //   async getRoles() {
  //     await wait();
  //     const ROLES = ['user', 'super-user', 'admin'];

  //     console.log('GET /roles', ROLES);
  //     return ROLES;
  //   },
};

export default api;
