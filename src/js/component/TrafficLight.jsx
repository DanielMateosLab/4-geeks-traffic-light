import React, { useEffect, useState } from "react";
import Light from "./Light.jsx";

const TrafficLight = ({ colors, looping }) => {
	const [activeColor, setActive] = useState();
	// TODO: clean code, implement loop checkbox
	const [intervalId, setIntervalId] = useState();

	const [count, setCount] = useState(0);
	function addCount() {
		setCount((prevCount) =>
			prevCount < colors.length - 1 ? prevCount + 1 : 0
		);
	}
	useEffect(() => {
		setActive(colors[count]);
	}, [count]);

	function removePreviousInterval() {
		clearInterval(intervalId);
	}

	useEffect(() => {
		intervalId && removePreviousInterval();

		if (looping) {
			const id = setInterval(addCount, 1000);
			setIntervalId(id);
		}
	}, [looping, colors]); // The hooks depends on colors to include/exclude the purple light in the loop

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
