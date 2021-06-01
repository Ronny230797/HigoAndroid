import { ADDNUMBER, REMOVENUMBER } from './ActionTypes';

export const addNumber = (numberElement) =>({
    type: ADDNUMBER,
    payload: numberElement
});

export const removeNumber = (number) =>({
    type: REMOVENUMBER,
    payload: number,
});