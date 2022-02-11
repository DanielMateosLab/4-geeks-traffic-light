import React from "react";
import Checkbox from "./Checkbox.jsx";

const Nav = ({ setColors }) => {
	function onSetPurple(event) {
		event.currentTarget.checked
			? setColors((colors) => [...colors, "mediumpurple"])
			: setColors((colors) => colors.slice(0, -1));
	}

	return (
		<nav>
			<Checkbox id="looping" text="Enable looping" />
			<Checkbox
				id="add-purple"
				text="Add purple color"
				onChange={onSetPurple}
			/>
		</nav>
	);
};

export default Nav;
