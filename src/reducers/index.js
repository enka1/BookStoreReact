import {
    combineReducers
} from 'redux'

import books from './book.reducer'
import author from './author.reducer'

export const rootReducer = combineReducers({
    books,
    author
})