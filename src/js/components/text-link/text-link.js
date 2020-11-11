import React from "react";
import { Link } from "react-router-dom";

export const TextLink = props => {

	const Element = props.external ? "a" : Link;

	return (
		<Element 
			className={`text-link ${props.classes}`}
			{...props.external ? {href: props.link, target: '_blank'} : {to: props.link}}
		>
			{props.children}
		</Element>
	);
}

TextLink.defaultProps = {
	classes: "",
	children: "",
	link: false,
	external: false,
};
