import axios from 'axios'

export const LATEST_BOOK = 'LATEST_BOOK'

export function fetch_latest_book() {
  return async(dispatch) => {
    let results = await axios.get('http://localhost:8000/book/latest_arrived')
    console.log(results)
    return dispatch({type: LATEST_BOOK, payload: results.data.data})
  }
}