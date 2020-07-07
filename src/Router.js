import React from 'react'
import List from './pages/list'
import {
	BrowserRouter as Router
} from "react-router-dom";

function routes() {
	return ( 
		<Router path="list" component={() => <List/>}/ > 
	)
}
export default routes