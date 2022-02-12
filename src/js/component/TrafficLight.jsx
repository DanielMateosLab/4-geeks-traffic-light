import React, { useState } from "react";
import useColorsIterator from "../hooks/useColorsIterator.js";
import Light from "./Light.jsx";

const TrafficLight = ({ colors, looping }) => {
	const [activeColor, setActiveColor] = useState();

	useColorsIterator(colors, looping, setActiveColor);

	return (
		<div className="tl-box">
			{colors.map((color) => (
				<Light
					key={color}
					color={color}
					active={color == activeColor}
					setActive={setActiveColor}
				/>
			))}
		</div>
	);
};

export default TrafficLight;
