import {
    BOOK_DETAIL
} from '../actions/book/fetch_book_detail.action'

export default function (state = [], action) {
    switch (action.type) {
        case BOOK_DETAIL:
            return action.payload
        default:
            return state
    }
}