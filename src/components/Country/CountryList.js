import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
	useGetCountryQuery,
	useGetRegionQuery,
	useGetAllQuery,
} from "../../services/CountryAPI";
import { select } from "../../features/Country";
import CountryCard from "./CountryCard";

const CountryList = () => {
	const { option } = useSelector((state) => state.option);
	const { searched } = useSelector((state) => state.search);
	const allResult = useGetAllQuery();
	const countriesResult = useGetCountryQuery(searched);
	const regionResult = useGetRegionQuery(option);

	const [countryList, setCountryList] = useState(allResult);

	const dispatch = useDispatch();

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
				<Link
					onClick={() => dispatch(select(country))}
					key={country.name.official}
					to={`/details/${country.name.official}`}
				>
					<CountryCard
						key={country.name.official}
						name={country.name.official}
						capital={country.capital}
						region={country.region}
						population={country.population}
						flag={country.flags.svg}
					/>
				</Link>
			))}
		</>
	);
};

export default CountryList;
