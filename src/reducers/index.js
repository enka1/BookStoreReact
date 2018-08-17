import {combineReducers} from 'redux'
import book_detail from './book_detail.reducer'
import books from './books.reducer'
export const rootReducer = combineReducers({book_detail, books})