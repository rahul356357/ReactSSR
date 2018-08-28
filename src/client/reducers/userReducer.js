import { FETCH_USERS } from '../actions/index';

export default (state = [], action) => {
    const { type  ,payload } = action;
    switch (type) {
        case FETCH_USERS:
            return payload;
        default:
            return state
    }
}