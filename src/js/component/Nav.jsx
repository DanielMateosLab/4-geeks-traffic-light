import React from "react";
import Checkbox from "./Checkbox.jsx";

const Nav = ({ setColors, setLooping, looping }) => {
	function onSwitchPurple(event) {
		setColors((colors) =>
			event.target.checked
				? [...colors, "mediumpurple"]
				: colors.slice(0, -1)
		);
	}

	function onSwitchLooping(event) {
		setLooping(event.target.checked);
	}

	return (
		<nav>
			<Checkbox
				id="looping"
				text="Enable looping"
				onChange={onSwitchLooping}
				checked={looping}
			/>
			<Checkbox
				id="add-purple"
				text="Add purple color"
				onChange={onSwitchPurple}
			/>
		</nav>
	);
};

export default Nav;
