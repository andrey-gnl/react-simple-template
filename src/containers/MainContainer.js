import React from 'react';

export default class Main extends React.Component {

	constructor (props) {
		super(props);

		this.arrOf = [];
		this.state = {
			text: '',
			queries: this.arrOf,
			data: {}
		}

	}


	render() {

		return (
			<h1>Hello from ReactJS</h1>
		)
	}
};