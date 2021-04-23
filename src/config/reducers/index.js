import {combineReducers} from 'redux';

// * reducers

import {bookReducer} from './bookReducer';

//

const reducers = combineReducers({bookReducer});

export default reducers;
