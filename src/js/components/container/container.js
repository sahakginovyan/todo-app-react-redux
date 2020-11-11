import React from "react";

export const Container = props => {
	return <div className={`container ${props.classes}`}>{props.children}</div>;
}

Container.defaultProps = {
	classes: "",
	children: ""
};
