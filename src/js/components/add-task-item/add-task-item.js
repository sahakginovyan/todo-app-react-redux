import React, {useState} from "react";
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions';
import { IconButton } from "../icon-button";

const AddTaskItem = props => {
	
	// Setup state for input
	const [taskItemInputValue, setTaskItemInputValue] = useState('');

	// Update input value on change
	const handleOnTaskInputChange = e => {
		setTaskItemInputValue(e.currentTarget.value);
	}

	// Validate input
	// Not empty, no whitespace and not greater than 100 characters
	const validateTaskInput = () => {
		return (!taskItemInputValue || /^\s*$/.test(taskItemInputValue) || taskItemInputValue.length > 100 );
	}

	// Handle on task input key up
	const handleOnTaskInputKeyUp = e => {
		if( e.key === 'Enter' && !validateTaskInput() ) {
			handleOnAddTask();
		}
		return false;
	}

	// Handle on add task
	const handleOnAddTask = () => {
		setTaskItemInputValue('');
		props.onAddTask(taskItemInputValue);
	}

	return(
		<div className="add-task-item">
			<input className="task-input" type="text" placeholder="Type a task..." onChange={handleOnTaskInputChange} value={taskItemInputValue} onKeyUp={handleOnTaskInputKeyUp}/>
			<IconButton classes="color-primary size-sm" iconName="plus" disabled={validateTaskInput()} onClick={handleOnAddTask}/>
		</div>
	);
}

// Default props
AddTaskItem.defaultProps = {
	placeholder: "",
	iconName: ""
}

// Map our dispatch to props
const mapDispatchToProps = (dispatch) => {
	return {
		onAddTask: description => dispatch(addTask(description))
	}
}

// Connect our AddTaskItem component to the store
export default connect(
	null,
	mapDispatchToProps
)(AddTaskItem)