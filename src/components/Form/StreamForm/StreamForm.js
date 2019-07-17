import React from "react";
import { Field, reduxForm } from "redux-form";
import Input from "../Input/Input";

class StreamForm extends React.Component {
	renderInput({ input, label, meta }) {
		return <Input label={label} input={input} meta={meta} />;
	}

	onSubmit = data => {
		this.props.onSubmit(data);
	};

	render() {
		return (
			<div className={`section `}>
				<div className="container">
					<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
						<Field
							name="title"
							component={this.renderInput}
							label={"Enter Title"}
						/>

						<Field
							name="description"
							component={this.renderInput}
							label={"Enter Description"}
						/>
						<div className="control">
							<button className="button is-primary">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const validate = data => {
	const errors = {};

	if (!data.title) {
		errors.title = "You must enter a Title";
	}

	if (!data.description) {
		errors.description = "You must enter a Description";
	}

	return errors;
};

export default reduxForm({
	form: "streamForm",
	validate
})(StreamForm);
