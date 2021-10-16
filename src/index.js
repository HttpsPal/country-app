import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import Store from "./app/Store";
import App from "./App";

import "./scss/main.scss";

ReactDOM.render(
	<StrictMode>
		<Provider store={Store}>
			<App />
		</Provider>
	</StrictMode>,
	document.querySelector("#root")
);
