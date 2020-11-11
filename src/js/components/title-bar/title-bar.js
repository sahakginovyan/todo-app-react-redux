import React from "react";

export const TitleBar = props => {
	return (
	<div className={`title-bar ${props.classes}`}>
		<div className="inner">
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
		</div>
	</div>
	);
}

TitleBar.defaultProps = {
	classes: ""
}
