import { v4 } from 'node-uuid';

// Import action types
import {
	ADD_TASK,
	TOGGLE_TASK_COMPLETED_STATUS,
	DELETE_TASK,
	DELETE_COMPLETED_TASKS,
	DELETE_ALL_TASKS
} from '../action-types';

// Set our initial state
const initialState = [];

// Manage tasks state reducer
const tasksReducer = (state = initialState, action) => {

	switch(action.type) {

		case ADD_TASK:

			// Spread will map values of an arrary to a new array without mutating the original array - win!

			return [...state,{
				id: v4(),
				description: action.description,
				completed: false
			}]

		case TOGGLE_TASK_COMPLETED_STATUS:

			// We must first locate the task by index (id) and then toggle it's completed value to the opposite of the previous completed value
			// We'll use map to itterate over the array
			// Map allows us to evaultate each item in a given array and will return the array as a new array, it does not mutate the original array - win!

			return state.map( task => {
				if( task.id === action.id ) {
					return {...task, completed: !task.completed}
				}
				return task
			})

		case DELETE_TASK:

			// We must locate the task by index (id) and remove it from the array
			// Filter will evaluate each item in the array, if false it will remove the item 
			// Filter returns a filtered array, it does not mutate the original array - win!

			return state.filter(task => task.id !== action.id)

		case DELETE_COMPLETED_TASKS:

			// We must filter our tasks, returning only those tasks with a completed status of false

			return state.filter( task => !task.completed )

		case DELETE_ALL_TASKS:

			// Return an empty array

			return []

		default:

			// Fallback, return state

			return state
	}

}

export default tasksReducer;