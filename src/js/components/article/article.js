import React from 'react';

export const Article = props => {
	return(
		<article className={`article ${props.classes}`}>
			{props.children}
		</article>
	);
}

Article.defaultProps = {
	classes: ''
}