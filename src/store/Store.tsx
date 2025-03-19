import { createStore, combineReducers } from 'redux'; // Import necessary functions
import showResultsReducer from '../reducer/Reducer'; // Import your reducer

// Combine reducers if you have more than one; here we are using just one
const rootReducer = combineReducers({
    showResults: showResultsReducer, // Add your showResults reducer
});

// Create the Redux store
const store = createStore(rootReducer);

export default store; // Export the store
