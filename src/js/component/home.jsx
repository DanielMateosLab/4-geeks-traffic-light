import React, { useEffect, useState } from "react";
import Nav from "./Nav.jsx";

import TrafficLight from "./TrafficLight.jsx";

const Home = () => {
	const [colors, setColors] = useState(["red", "orange", "limegreen"]);
	const [looping, setLooping] = useState(true);

	return (
		<div className="root">
			<Nav setColors={setColors} setLooping={setLooping} />
			<TrafficLight colors={colors} looping={looping} />
		</div>
	);
};

export default Home;
