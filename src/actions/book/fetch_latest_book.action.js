import axios from 'axios'

export const LATEST_BOOK = 'LATEST_BOOK'

export const fetch_latest_book = () => {
  return async (dispatch) => {
    let results = await axios.get('http://localhost:8000/book/latest_arrived')
    return dispatch({
      type: LATEST_BOOK,
      payload: results.data.data
    })
  }
}