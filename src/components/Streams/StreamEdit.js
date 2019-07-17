import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "../Form/StreamForm/StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = (data) => {
		this.props.editStream( this.props.match.params.id, data );
	};

	render() {
		return (
			<div className="section">
				<div className="content">
					<h1 className="title is-3">Edit</h1>
				</div>
				<StreamForm
					initialValues={_.pick(this.props.stream, 'title', 'description')}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { streams: state.streams[ownProps.match.params.id] };
};

export default connect(
	mapStateToProps,
	{ fetchStream, editStream }
)(StreamEdit);
