import { FETCH_USERS } from '../actions/index';


export default (state = [], actions) => {
    const { type } = actions;
    switch (type) {
        case FETCH_USERS:
            return actions.payload;
        default:
            return state
    }
}