import {LATEST_BOOK_DEFAULT, BOOK_BY_GENRES} from '../actions/users/books/fetch_book_list.action'
export default function (state = [], action) {
  switch (action.type) {
    case LATEST_BOOK_DEFAULT:
      return action.data;
    case BOOK_BY_GENRES:
      return action.data;
    default:
      return state;
  }
}