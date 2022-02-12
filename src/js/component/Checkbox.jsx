import React from "react";

const Checkbox = ({ text, id, onChange, checked }) => (
	<div className="form-check">
		<input
			className="form-check-input"
			type="checkbox"
			value=""
			id={id}
			onChange={onChange}
			checked={checked}
		/>
		<label className="form-check-label" htmlFor="looping">
			{text}
		</label>
	</div>
);

export default Checkbox;
