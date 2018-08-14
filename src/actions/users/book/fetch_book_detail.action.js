import axios from 'axios'

export const BOOK_DETAIL = 'BOOK_DETAIL'
export const fetch_book_detail = (book_id) => {
    return async (dispatch) => {
        let book = await axios.get('http://localhost:8000/book/book_detail', {
            params: {
                book_id
            }
        })
        return dispatch({
            type: BOOK_DETAIL,
            payload: book.data
        })
    }
}