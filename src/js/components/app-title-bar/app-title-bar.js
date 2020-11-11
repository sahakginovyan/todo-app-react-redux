import React from "react";
import { connect } from 'react-redux';
import { TitleBar } from "../title-bar";
import { Title } from "../title";
import { IconButton } from "../icon-button";

const AppTitleBar = props => {

	return(
		<TitleBar classes="app-title-bar is-fixed"
			leftSlot={
				<Title classes="size-sm color-white">Tasks</Title>
			}
			rightSlot={
				<React.Fragment>
					<span className="task-count text-color-white text-bold">{props.taskCount}</span>
					<div className="app-actions">
						<IconButton classes={`inverted ${props.location === '/settings' ? "disabled" : ""}`} iconName="sliders-h" link="/settings" />
					</div>
				</React.Fragment>
			}
		/>
	);
}

// Set default props
AppTitleBar.defaultProps = {
	taskCount: 0
}

// Map our state to props
const mapStateToProps = state => {

	// Get all tasks with "completed" status of true
	const completedTasks = state.tasks.filter( task => !task.completed);

	// Return a count of all completed tasks if less than or equal to 100, else return 100+
	return {
		taskCount : completedTasks.length <= 100 ? completedTasks.length : "100+"
	}

}

// Connect our App title bar to the store
export default connect(
	mapStateToProps,
	null
)(AppTitleBar)