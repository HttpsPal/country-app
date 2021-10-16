import React from "react";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

const FormBar = () => {
	return (
		<div className="top">
			<form className="form" onSubmit={(e) => e.preventDefault()}>
				<div className="form__group form__group--1">
					<SearchBar />
				</div>
				<div className="form__group form__group--2">
					<Dropdown />
				</div>
			</form>
		</div>
	);
};

export default FormBar;
