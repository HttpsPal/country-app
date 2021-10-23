import React from "react";

const FlagBox = ({ image, name }) => {
	return (
		<>
			<img className="details__img" src={image} alt={`${name} Flag`} />
		</>
	);
};

export default FlagBox;
