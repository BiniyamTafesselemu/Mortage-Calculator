import { SHOW_RESULTS, SET_MORTGAGE_TYPE } from '../action/Action';

interface State {
    showResults: boolean;
    mortgageType: string | null; // New state for mortgage type
}

interface Action {
    type: string;
    payload?: string | null; // Allow payload for actions with a specific type
}

const initialState: State = {
    showResults: true,
    mortgageType: null, // Initialize mortgage type
};

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SHOW_RESULTS:
            return {
                ...state,
                showResults: false
            };
        case SET_MORTGAGE_TYPE:
            return {
                ...state,
                mortgageType: action.payload ?? null, // Set the selected mortgage type or default to null
            };
        default:
            return state; // Return the current state if no action matches
    }
};

export default reducer;
