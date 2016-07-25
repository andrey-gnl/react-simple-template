import React from 'react';


export default function Wrapper(props) {
	return (
		<div className="entry">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-8 col-md-offset-2">
						{props.children}
					</div>
				</div>
			</div>
		</div>

	)
}