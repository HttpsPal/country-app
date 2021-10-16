import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/details/:name" component={Details} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;