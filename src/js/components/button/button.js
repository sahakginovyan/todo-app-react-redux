import React from "react";
import { Link } from "react-router-dom";

export const Button = props => {

	let Element;
	
	if( props.link && props.external ) {
		Element = "a"
	}
	else if( props.link ) {
		Element = Link
	}
	else {
		Element = "button"
	}

	return (
		<Element
			{ ...props.name ? { name: props.name } : null}
			{ ...props.type ? { type: props.type } : null}
			{...props.classes ? { className : `button ${props.classes}` } : { className: "button" } }
			{ ...props.disabled ? { disabled: true } : null }
			{...props.onClick ? { onClick: props.onClick} : null }
			{...props.link && !props.external ? { to: props.link } : undefined}
			{...props.external ? { href: props.link, target: '_blank' } : null}
		>
			{props.children}
		</Element>
	);
}

Button.defaultProps = {
	name: null,
	type: null,
	classes: null,
	disabled: false,
	onClick: null,
	link: false,
	external: false,
	children: null,
};
