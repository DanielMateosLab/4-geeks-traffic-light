import React from "react";

const Checkbox = ({ text, id, onChange }) => (
	<div className="form-check">
		<input
			className="form-check-input"
			type="checkbox"
			value=""
			id={id}
			onChange={onChange}
		/>
		<label className="form-check-label" for="looping">
			{text}
		</label>
	</div>
);

export default Checkbox;
