import React from "react";
import Home from "./home/Home";
import BuildQuiz from "./BuildQuiz/BuildQuiz";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div>
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/buildquiz'>
					<BuildQuiz />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
