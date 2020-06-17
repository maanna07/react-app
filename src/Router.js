import React from 'react'
import List from './pages/list'
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

function router() {
	return ( 
		<Router>
			<Route path="list" component={() => <List/>}/ > 
		</Router>
	);
}
export default router;