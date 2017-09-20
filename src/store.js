import {createStore, compose, combineReducers } from 'redux';

import partyOneReducer from './reducers/partyOneReducer';
import partyTwoReducer  from './reducers/partyTwoReducer';
import partyThreeReducer  from './reducers/partyThreeReducer';


export default createStore(
	combineReducers({		
		 partyOneReducer,
		 partyTwoReducer,
		 partyThreeReducer
	}),	
	compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
); 