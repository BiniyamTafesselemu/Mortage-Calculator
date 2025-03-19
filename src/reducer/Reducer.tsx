import { TOGGLE_SHOW_RESULTS } from '../action/Action';

interface State {
    showResults: boolean;
}

interface Action {
    type: string;
}

const initialState: State = {
    showResults: true,
};

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case TOGGLE_SHOW_RESULTS:
            return {
                ...state,
                showResults: false, // Toggle the showResults state
            };
        default:
            return state; // Return the current state if no action matches
    }
};

export default reducer;
