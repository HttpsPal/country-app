import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
	useGetCountryQuery,
	useGetRegionQuery,
	useGetAllQuery,
} from "../../services/CountryAPI";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const CountryList = () => {
	const { option } = useSelector((state) => state.option);
	const { searched } = useSelector((state) => state.search);

	const allResult = useGetAllQuery();
	const countriesResult = useGetCountryQuery(searched);
	const regionResult = useGetRegionQuery(option);

	console.log();

	return (
		<>
			{allResult.data?.map((country) => (
				<Link
					onClick={() => {}}
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
