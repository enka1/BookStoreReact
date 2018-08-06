import {combineReducers} from 'redux'

import books from './book.reducer'

export const rootReducer = combineReducers({
    books : books
})