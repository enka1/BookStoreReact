import {
    AUTHOR_DETAIL
} from '../actions/users/author/fetch_author_detail.action'

export default function (state = [], action) {
    switch (action.type) {
        case AUTHOR_DETAIL:
            return action.payload
        default:
            return state
    }
}