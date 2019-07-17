import React from "react";
import Modal from "../Modal/Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}
	goToList() {
		history.push("/");
	}

	renderContent() {
		if (!this.props.stream) {
			return "Are you sure you want to delete this stream?";
		}
		return `Are you sure you want to delete ${this.props.stream.title} ?`;
	}

	renderActions() {
		return (
			<div>
				<button
					className="button is-danger"
					onClick={() =>
						this.props.deleteStream(this.props.match.params.id)
					}
				>
					Delete
				</button>
				<button onClick={this.goToList} className="button is-primary">
					Cancel
				</button>
			</div>
		);
	}

	render() {
		return (
			<Modal
				onDismis={this.goToList}
				title={"Delete Stream"}
				content={this.renderContent()}
				actions={this.renderActions()}
			/>
		);
	}
}

const mapStateToProp = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
	mapStateToProp,
	{ fetchStream, deleteStream }
)(StreamDelete);
