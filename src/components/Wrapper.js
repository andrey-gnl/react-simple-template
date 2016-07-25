import React from 'react';


export default function Wrapper(props) {
	return (
		<div className="entry">
			{props.children}
		</div>

	)
}