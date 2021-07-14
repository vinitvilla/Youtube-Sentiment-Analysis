import { INITIAL_STATE } from "./data.js";

export default function reducer(state = INITIAL_STATE , action) {
    switch(action.type) {
        case 'bugAdded':
            return [
                ...state, 
                {
                    id: 1
                }
            ];
        case 'bugRemoved':
            return state.filter((id) => id !== action.id);
        default:
            return state;

    }
}