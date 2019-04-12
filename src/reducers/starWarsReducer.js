/* we need our action types here*/
import { FETCH_CHAR_START, FETCH_CHAR_SUCCESS, FETCH_CHAR_FAILURE } from '../actions';

const initialState = {
	characters : [],
	fetching   : false,
	error      : null
	// Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		// Fill me in with the important reducers
		// action types should be FETCHING, SUCCESS and FAILURE
		// your switch statement should handle all of these cases.
		case FETCH_CHAR_START:
			return {
				...state,
				error    : null,
				fetching : true
			};
		case FETCH_CHAR_SUCCESS:
			return {
				...state,
				error      : null,
				fetching   : false,
				characters : action.payload
			};
		case FETCH_CHAR_FAILURE:
			return {
				...state,
				error : 'oops! Something went wrong'
			};
		default:
			return state;
	}
};
