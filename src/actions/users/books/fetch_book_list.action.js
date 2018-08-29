import axios from 'axios'

export const BOOK_BY_GENRES = "BOOK_BY_GENRES";

export const fetch_by_book_genre = (page, genres, sortBy, isAsc) => {
  return async(dispatch) => {
    let results = await axios.post('http://localhost:8000/api/books/by_genre', {
      genres,
      page,
      sortBy: 'on_shelf_time',
      isAsc: false
    })
    return dispatch({type: BOOK_BY_GENRES, data: results.data})
  }
}