export const SHOW_RESULTS = 'SHOW_RESULTS';
export const SET_MORTGAGE_TYPE = 'SET_MORTGAGE_TYPE'; // New action type

export const ShowResults = () => ({
    type: SHOW_RESULTS,
});

export const setMortgageType = (mortgageType: string) => ({
    type: SET_MORTGAGE_TYPE,
    payload: mortgageType, // Pass the selected mortgage type
});
