import React from "react";

const Light = ({ color, active, setActive }) => {
	const activeBoxShadow = `0 0 4rem 1rem ${color}`;

	return (
		<div
			className={`light ${active ? "active" : ""}`}
			style={{
				background: color,
			}}
			onClick={() => setActive(color)}>
			<div
				className="light-glow"
				style={active ? { boxShadow: activeBoxShadow } : {}}
			/>
			<div className="lightbulb" />
		</div>
	);
};

export default Light;
