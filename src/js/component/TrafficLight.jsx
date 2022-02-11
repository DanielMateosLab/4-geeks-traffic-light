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
		console.log(`Cleaning ` + intervalId);
		clearInterval(intervalId);
	}

	useEffect(() => {
		intervalId && removePreviousInterval();

		const id = setInterval(addCount, 1000);
		console.log(`Interval set with id ${id}`);
		setIntervalId(id);
	}, [looping, colors]);

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
