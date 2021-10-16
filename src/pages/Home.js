import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import FormBar from "../components/Form/FormBar";
import CountryList from "../components/Country/CountryList";

const Home = () => {
	const { darkMode } = useSelector((state) => state.darkMode);

	return (
		<>
			<Navbar />
			<div className={darkMode ? "container nightmode" : "container"}>
				<FormBar />
				<div className="grid">
					<CountryList />
				</div>
			</div>
		</>
	);
};

export default Home;
