import { useState, useEffect } from "react";

/** If looping is true, sets a new color of colors every second. */
const useColorsIterator = (colors, looping, setColor) => {
	const [index, setIndex] = useState(0);
	/** Call setIndex with next color index of colors
		If the current index is the last one, goes back to the first color */
	function setNextIndex() {
		setIndex((prevIndex) => {
			const isLastIndex = prevIndex >= colors.length - 1;

			// If is last index we reset the index count, otherwhise add 1
			return isLastIndex ? 0 : prevIndex + 1;
		});
	}

	const [intervalId, setIntervalId] = useState();
	// Interval set up and teardown
	useEffect(() => {
		// If there is a previous interval we stop it
		intervalId && clearInterval(intervalId);

		// If looping is true we set a new interval
		if (looping) {
			const id = setInterval(setNextIndex, 1000);
			setIntervalId(id);
		}

		//  Depends on colors to include/exclude the purple color (view updateIndex() for details)
	}, [looping, colors]);

	// Update active color
	useEffect(() => {
		setColor(colors[index]);
	}, [index]);
};

export default useColorsIterator;
