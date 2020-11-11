// Import action types
import {
	TOGGLE_SHOW_COMPLETED_TASKS,
	TOGGLE_DARK_MODE,
	ADD_TASK,
	TOGGLE_TASK_COMPLETED_STATUS,
	DELETE_TASK,
	DELETE_COMPLETED_TASKS,
	DELETE_ALL_TASKS
} from './action-types';

// Toggle show completed tasks preference
// Uses ES6 syntax to return object literal
// Accepts no action params
export const toggleShowCompletedTasks = () => (
	{type: TOGGLE_SHOW_COMPLETED_TASKS}
);

// Toggle dark mode preference
// Uses ES6 syntax to return object literal
// Accepts no action params
export const toggleDarkMode = () => (
	{type: TOGGLE_DARK_MODE}
);

// Add a new task
// Uses ES6 syntax to return object literal
// Accepts a task description (string)
export const addTask = description => (
	{type: ADD_TASK, description}
);

// Toggle a tasks completed status
// Uses ES6 syntax to return object literal
// Accepts a task ID (int)
export const toggleTaskCompletedStatus = id => (
	{type: TOGGLE_TASK_COMPLETED_STATUS, id}
);

// Delete a task
// Uses ES6 syntax to return object literal
// Accepts a task ID (int)
export const deleteTask = id => (
	{type: DELETE_TASK, id}
);

// Delete all completed tasks
// Uses ES6 syntax to return object literal 
// Accepts no action params
export const deleteCompletedTasks = () => (
	{type: DELETE_COMPLETED_TASKS}
);

// Delete all tasks
// Uses ES6 syntax to return object literal 
// Accepts no action params
export const deleteAllTasks = () => (
	{type: DELETE_ALL_TASKS}
);