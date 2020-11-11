import React from "react";

export const Check = props => {
	return (
		<label className={`check ${props.classes}`}>
			<input
				name={props.name}
				type="checkbox"
				checked={props.checked}
				disabled={props.disabled}
				onChange={props.onChange}
			/>
			<span className="check-mark" />
		</label>
	);
}

Check.defaultProps = {
	name: "",
	checked: false,
	disabled: false,
	classes: ""
};
