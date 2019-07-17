import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "../Form/StreamForm/StreamForm";

class StreamCreate extends React.Component {
	onSubmit = data => {
		this.props.createStream(data);
	};

	render() {
		return (
			<div className="section">
				<div className="content">
					<h1 className="title is-3">Create A New Stream</h1>
				</div>
				<StreamForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(
	null,
	{ createStream }
)(StreamCreate);
