import {LATEST_BOOK} from '../actions/book/fetch_latest_book.action'

export default function (state = [], action) {
  switch (action.type) {
    case LATEST_BOOK:
      return action.payload
    default:
      return null
  }
}