//@flow
import { createAction, createReducer } from 'redux-act';

const setUser = createAction();

const defaultState = {
    username: "World"
}

export const changeUser = payload => dispatch => {
    try {
        dispatch(setUser({data: "Guest"}));
    } catch (e) {
        console.log(e)
    }
};

const userReducer = createReducer({
	[setUser]: (state, { data }) => ({
        ...state,
		username: data,
	}),
}, defaultState);

export default userReducer;
