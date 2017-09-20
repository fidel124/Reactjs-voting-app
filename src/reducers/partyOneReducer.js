const partyOneReducer = (state = {firstParty: 10}, action) => {
	switch(action.type){

		case 'VOTE_PARTY_ONE':						
			return {
				...state,
				firstParty: state.firstParty + 1
			}	
		default:
			return state			
	}	
};

export default partyOneReducer;