import React from "react";
import Nav from "./Nav.jsx";

import TrafficLight from "./TrafficLight.jsx";

const Home = () => {
	return (
		<div className="root">
			<Nav />
			<TrafficLight />
		</div>
	);
};

export default Home;
