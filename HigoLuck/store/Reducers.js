import { ADDNUMBER, REMOVENUMBER } from './ActionTypes';

const initialState = {
     listOfNumbers: [],
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDNUMBER:
            return { ...state, listOfNumbers: [...state.listOfNumbers, action.payload] };

        case REMOVENUMBER:
            return {... state,listOfNumbers: [...state.listOfNumbers, state.listOfNumbers.filter(x => x.number != action.payload)]}
        default:
            return state;
    }
}