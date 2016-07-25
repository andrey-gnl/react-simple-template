import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import Main from '../components/Main'


let routes = (
	<Router history={browserHistory}>
		{/*<IndexRoute component={Main} />*/}
		<Route path="/" component={Main}/>
	</Router>
);

export default routes;