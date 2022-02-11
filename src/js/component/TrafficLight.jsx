import React, { useState } from "react";
import Light from "./Light.jsx";

const TrafficLight = () => {
	const colors = ["red", "orange", "limegreen"];

	const [activeColor, setActive] = useState();

	return (
		<div className="tl-box">
			{colors.map((color) => (
				<Light
					color={color}
					key={color}
					active={color == activeColor}
					setActive={setActive}
				/>
			))}
		</div>
	);
};

export default TrafficLight;
