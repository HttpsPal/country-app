import React, { useState, useEffect } from "react";

const RightInfoDetails = ({ country }) => {
	const [languages, setLanguages] = useState([]);
	const [currencies, setCurrencies] = useState([]);

	useEffect(() => {
		const arr = [];
		for (let lang of Object.keys(country.languages)) {
			arr.push(country.languages[lang]);
		}
		setLanguages(arr);
	}, [country.languages]);

	useEffect(() => {
		const arr = [];
		for (let coin in country.currencies) {
			arr.push(country.currencies[coin]);
		}
		setCurrencies(arr);
	}, [country.currencies]);

	return (
		<>
			<p className="details__item">
				Top Level Domain:
				<span className="details__span">{country.tld}</span>
			</p>
			<p className="details__item">
				Currencies:
				{currencies ? (
					currencies.map((coin) => (
						<span key={coin} className="details__span">
							{coin.name},
						</span>
					))
				) : (
					<span className="details__span">Loading...</span>
				)}
			</p>
			<p className="details__item">
				Languages:
				{languages.map((lang) => (
					<span key={lang} className="details__span">
						{lang},
					</span>
				))}
			</p>
		</>
	);
};

export default RightInfoDetails;
