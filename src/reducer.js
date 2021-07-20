import { INITIAL_STATE } from "./data.js";

export default function reducer(state = INITIAL_STATE , action) {
    switch(action.type) {
        case 'updateNavActive':
            return {
                ...state, 
                nav_bar_active: action.payload.index
            };
        case 'bugRemoved':
            return state.filter((id) => id !== action.id);
        default:
            return state;

    }
}