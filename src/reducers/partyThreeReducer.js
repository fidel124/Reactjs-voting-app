const partyThreeReducer = (state = {thirdParty: 7}, action) => {
	switch(action.type){

		case 'VOTE_PARTY_THREE':			
			return Object.assign({}, state,{
					thirdParty: state.thirdParty + 1
			});			
		default:
			return state			
	}	
};

export default partyThreeReducer;