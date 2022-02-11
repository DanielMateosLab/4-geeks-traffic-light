import React from "react";
import Checkbox from "./Checkbox.jsx";

const Nav = () => {
	return (
		<nav>
			<Checkbox id="looping" text="Enable looping" />
			<Checkbox id="add-purple" text="Add purple color" />
		</nav>
	);
};

export default Nav;
