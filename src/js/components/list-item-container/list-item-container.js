import React from "react";

export const ListItemContainer = props => {
	return (
		<div className={`list-item-container ${props.classes}`}>
			{ props.leftSlot &&
				<div className="left-slot">
					{props.leftSlot}
				</div>
			}
			{ props.rightSlot &&
				<div className="right-slot">
					{props.rightSlot}
				</div>
			}
		</div>);
}

ListItemContainer.defaultProps = {
	classes: "",
	children: ""
}
