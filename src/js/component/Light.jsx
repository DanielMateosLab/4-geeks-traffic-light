import React from "react";

const Light = ({ color, active, setActive }) => {
	const onBoxShadow = `0 0 4rem 1rem ${color}`;
	const offBoxShadow = "inset 0 0 4rem black";

	return (
		<div
			className="light"
			style={{
				background: color,
				boxShadow: active ? onBoxShadow : offBoxShadow,
			}}
			onClick={() => setActive(color)}
		/>
	);
};

export default Light;
