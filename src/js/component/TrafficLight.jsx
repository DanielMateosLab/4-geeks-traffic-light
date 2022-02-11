import React, { useState } from "react";
import Light from "./Light.jsx";

const TrafficLight = ({ colors }) => {
	const [activeColor, setActive] = useState();

	return (
		<div className="tl-box">
			{colors.map((color) => (
				<Light
					key={color}
					color={color}
					active={color == activeColor}
					setActive={setActive}
				/>
			))}
		</div>
	);
};

export default TrafficLight;
