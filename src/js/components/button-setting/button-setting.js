import React from 'react';
import { ListItemContainer } from '../list-item-container';
import { ListItemDescription } from '../list-item-description';
import { Button } from '../button';

export const ButtonSetting = props => {

	return( 
		<ListItemContainer
			leftSlot={
				<ListItemDescription>{props.description}</ListItemDescription>
			}
			rightSlot={
				<Button
				classes={props.buttonClasses}
				disabled={props.disabled}
				onClick={props.onClick}
				>
				{props.buttonLabel}
				</Button>
			}
		/>
	)

}

ButtonSetting.defaultProps = {
	buttonClasses: null,
	disabled: false
}