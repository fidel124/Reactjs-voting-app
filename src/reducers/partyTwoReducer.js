const partyTwoReducer = (state = {secondParty: 5}, action) => {
	switch(action.type){

		case 'VOTE_PARTY_TWO':			
			return Object.assign({}, state,{
				secondParty: state.secondParty + 1
			});			
		default:
			return state			
	}	
};

export default partyTwoReducer;