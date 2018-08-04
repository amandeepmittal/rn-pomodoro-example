import { START_TIMER, RESTART_TIMER, ADD_SECOND } from './types';

const TIMER_DURATION = 6;

// initial state
const initialState = {
	isPlaying: false,
	elapsedTime: 0,
	timerDuration: TIMER_DURATION
};

// Helper Functions

function applyStartTimer(state) {
	return {
		...state,
		isPlaying: true
	};
}

function applyRestartTimer(state) {
	return {
		...state,
		isPlaying: false,
		elapsedTime: 0,
		timerDuration: TIMER_DURATION
	};
}

function applyAddSecond(state) {
	if (state.elapsedTime < TIMER_DURATION) {
		return {
			...state,
			elapsedTime: state.elapsedTime + 1
		};
	} else {
		return {
			...state,
			isPlaying: false
		};
	}
}

// Reducer Function

function reducer(state = initialState, action) {
	switch (action.type) {
		case START_TIMER:
			// handle the action here using helper functions
			return applyStartTimer(state);
		case RESTART_TIMER:
			// handle the action here using helper functions
			return applyRestartTimer(state);
		case ADD_SECOND:
			// handle the action here using helper functions
			return applyAddSecond(state);
		default:
			return state;
	}
}

export default reducer;
