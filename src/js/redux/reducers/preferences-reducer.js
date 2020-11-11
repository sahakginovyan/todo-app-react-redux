// Import action types
import {
	TOGGLE_SHOW_COMPLETED_TASKS,
	TOGGLE_DARK_MODE
} from '../action-types';

// Set our initial state
const initialState = {
	showCompletedTasks: true,
	darkMode: false
}

// Preferences reducer
const preferencesReducer = (state = initialState, action) => {
	switch(action.type) {
		case TOGGLE_SHOW_COMPLETED_TASKS:
			return {...state, showCompletedTasks: !state.showCompletedTasks}
		case TOGGLE_DARK_MODE:
			return {...state, darkMode: !state.darkMode}
		default:
			return state
	}
}

export default preferencesReducer;