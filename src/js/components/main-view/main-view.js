import React from "react";
import { AppTitleBar } from "../app-title-bar";
import { AddTaskItem } from "../add-task-item";
import { TasksList }from "../tasks-list";
import { Container } from '../container';

export const MainView = props => {

	return(
		<div className="main-view">
			<AppTitleBar 
				location={props.location.pathname}
			/>
			<Container classes="no-padding">
				<AddTaskItem />
				<TasksList />
			</Container>
		</div>
	);
}