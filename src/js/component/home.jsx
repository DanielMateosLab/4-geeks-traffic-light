import React, { useState } from "react";
import Nav from "./Nav.jsx";

import TrafficLight from "./TrafficLight.jsx";

const Home = () => {
	const [colors, setColors] = useState(["red", "orange", "limegreen"]);

	return (
		<div className="root">
			<Nav setColors={setColors} />
			<TrafficLight colors={colors} />
		</div>
	);
};

export default Home;
