import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../../features/Options";
import { RiArrowDropDownLine } from "react-icons/ri";

const Options = [
	{
		id: 1,
		title: "Africa",
	},
	{
		id: 2,
		title: "Americas",
	},
	{
		id: 3,
		title: "Asia",
	},
	{
		id: 4,
		title: "Europe",
	},
	{
		id: 5,
		title: "Oceania",
	},
];

const Dropdown = () => {
	const [active, setActive] = useState(false);
	const { darkMode } = useSelector((state) => state.darkMode);
	const { option } = useSelector((state) => state.option);

	const dispatch = useDispatch();

	return (
		<>
			<div className={darkMode ? "dropdown nightmode" : "dropdown"}>
				<div onClick={() => setActive(!active)} className="dropdown-btn">
					{option || "Filter by Region"}
					<RiArrowDropDownLine
						style={{ fontSize: "2rem", marginRight: "-0.5rem" }}
					/>
				</div>
				<ul className={active ? "dropdown__list active" : "dropdown__list"}>
					{Options.map(({ id, title }) => (
						<li
							key={id}
							onClick={() => {
								setActive(false);
								dispatch(filter(title));
							}}
							className="dropdown__item"
						>
							{title}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Dropdown;
