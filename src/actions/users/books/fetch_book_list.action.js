import axios from 'axios'

export const LATEST_BOOK_DEFAULT = "LATEST_BOOK_DEFAULT";
export const BOOK_BY_GENRES = "BOOK_BY_GENRES";

export const fetch_latest_book_default = (page) => {
  return async(dispatch) => {
    let results = await axios.get('http://localhost:8000/api/books/latest_arrived', {params: {
        page
      }})
    return dispatch({type: LATEST_BOOK_DEFAULT, data: results.data})
  }
}

export const fetch_by_book_genre = (page, genres, sortBy, isAsc) => {
  return async(dispatch) => {
    let results = await axios.get('http://localhost:8000/api/books/by_genre', {
      params: {
        genres,
        page,
        sortBy: 'on_shelf_time',
        isAsc: false
      }
    })
    return dispatch({type: BOOK_BY_GENRES, data: results.data})
  }
}