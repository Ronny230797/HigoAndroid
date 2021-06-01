import { createStore} from 'redux';
import {mainReducer} from './Reducers';

export const store = createStore(mainReducer);