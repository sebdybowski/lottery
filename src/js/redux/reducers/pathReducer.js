import { CHANGE_PATH } from '../actions/pathActions';

const initialState = { path: '/' };

export const path = (state = initialState, action) => {
	const { type, payload } = action;
	switch(type) {
		case CHANGE_PATH: return { ...state, ...payload };
		default: return state;
	}
};