//@flow
import { createAction, createReducer } from 'redux-act';

const setTerm = createAction();

const defaultState = {
    term: "Hello"
}

export const changeTerm = payload => dispatch => {
    try {
        dispatch(setTerm({data: "Hi"}));
    } catch (e) {
        console.log(e)
    }
};

const termReducer = createReducer({
	[setTerm]: (state, { data }) => ({
        ...state,
		term: data,
	}),
}, defaultState);

export default termReducer;
