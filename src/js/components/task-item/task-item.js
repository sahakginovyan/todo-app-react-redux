import React from "react";
import { ListItemContainer } from "../list-item-container";
import { Check } from "../check";
import { ListItemDescription } from "../list-item-description";

export const TaskItem = props => {

	return(
		<ListItemContainer classes="task-item"
			leftSlot={
				<React.Fragment>
					<Check checked={props.complete} onChange={props.onChange}/>
					<ListItemDescription classes={props.complete ? 'text-strikethrough' : ''} >{props.description}</ListItemDescription>
				</React.Fragment>
			}
		/>
	);
	
}

TaskItem.defaultProps = {
	complete: false,
	classes: "",
	description: ""
}