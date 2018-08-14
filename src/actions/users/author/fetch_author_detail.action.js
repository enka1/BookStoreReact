import axios from 'axios'

export const AUTHOR_DETAIL = 'AUTHOR_DETAIL'

export const fetch_author_detail = (author_id) => {
  return async (dispatch) => {
    let results = await axios.get('http://localhost:8000/author', {
      params: {
        author_id
      }
    })
    return dispatch({
      type: AUTHOR_DETAIL,
      payload: results.data
    })
  }
}