import React from 'react'
import List from './pages/list'
import {
	BrowserRouter as Router,
	Switch,
  Route,
  Link
} from "react-router-dom";

function routes() {
  let numbers = [1,2,3,4,5,6]
	return ( 
		<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">list</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
			<Switch>
				<Route path="/list"> 
					<List numbers={numbers}/>
				</Route>
			</Switch>
      </div>
		</Router>	
	)
}
export default routes