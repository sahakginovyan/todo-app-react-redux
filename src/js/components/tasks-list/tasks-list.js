import React from "react";
import { connect } from 'react-redux';
import { toggleTaskCompletedStatus } from '../../redux/actions';
import { TaskItem } from "../task-item";

const TasksList = props => {

	return(
		<React.Fragment>
			{props.tasks.map((task) => 
				<TaskItem
					name={task.id}
					key={task.id}
					complete={task.completed}
					description={task.description}
					onChange={() => props.onTaskChange(task.id)}
				/>
			)}
		</React.Fragment>
	);
}

// Map our state to props
const mapStateToProps = state => {

	if(state.preferences.showCompletedTasks) {
		return { tasks : state.tasks }
	}
	else {
		return { tasks : state.tasks.filter(task => !task.completed) }
	}

}

// Map our dispatch to props
const mapDispatchToProps = (dispatch) => {
	return {
		onTaskChange: id => dispatch(toggleTaskCompletedStatus(id))
	}
}

// Connect our TasksList component to the store
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TasksList)
