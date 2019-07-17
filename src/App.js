import React from "react";
import MainRouter from './MainRouter'
import { Router } from "react-router-dom";
import history from "./history"

const App = props => {
	return (
		<div className={` `}>
			<Router history={history}>
				<MainRouter />
			</Router>
		</div>
	);
};

export default App;
