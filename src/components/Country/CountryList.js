import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
	useGetCountryQuery,
	useGetRegionQuery,
	useGetAllQuery,
} from "../../services/CountryAPI";
import CountryCard from "./CountryCard";

const CountryList = () => {
	const { option } = useSelector((state) => state.option);
	const { searched } = useSelector((state) => state.search);
	const allResult = useGetAllQuery();
	const countriesResult = useGetCountryQuery(searched);
	const regionResult = useGetRegionQuery(option);

	const [countryList, setCountryList] = useState(allResult);

	// const dispatch = useDispatch();

	useEffect(() => {
		setCountryList(allResult);
	}, [allResult]);

	useEffect(() => {
		if (option) {
			setCountryList(regionResult);
		}
	}, [option, regionResult]);

	useEffect(() => {
		if (searched) {
			setCountryList(countriesResult);
		}
	}, [searched, countriesResult]);

	return (
		<>
			{countryList.data?.map((country) => (
				<CountryCard
					key={country.name.official}
					name={country.name.official}
					capital={country.capital}
					region={country.region}
					population={country.population}
					flag={country.flags.svg}
				/>
			))}
		</>
	);
};

export default CountryList;
