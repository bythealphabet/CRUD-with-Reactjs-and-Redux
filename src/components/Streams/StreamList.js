import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
const isOdd = num => num % 2 === 1;

class StreamList extends React.Component {
	state = { active: false, id: null };
	componentDidMount() {
		this.props.fetchStreams();
	}

	deleteHandler = id => {
		this.setState({ active: true, id: id });
	};

	cancelDeleteHandler = () => {
		this.setState({ active: false });
	};

	renderCreate(stream) {
		if (stream.userId === this.props.CurrentUserId) {
		}
	}

	renderList() {
		return this.props.streams.map((stream, index) => {
			return (
				<div
					className={`column card ${
						isOdd(index) ? "has-background-light" : null
					}`}
					key={stream.id}
				>
					<div className=" content columns">
						<Link to = {`streams/${stream.id}`} className="column">
							<h4 className="title is-4">{stream.title}</h4>
							<h4 className="subtitle is-6">
								{stream.description}
							</h4>
						</Link>

						{this.props.isSignedIn &&
						stream.userId === this.props.CurrentUserId ? (
							<div className="buttons column">
								<Link
									to={`/streams/edit/${stream.id}`}
									className="button is-link is-radiusless"
								>
									Edit
								</Link>
								<Link
									to={`/streams/delete/${stream.id}`}
									className="button is-danger is-radiusless"
									onClick={() =>
										this.deleteHandler(stream.id)
									}
								>
									Delete
								</Link>
							</div>
						) : null}
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className={`section `}>
				<div className="container">
					<div className="content ">
						<h1 className="title is-1 has-text-primary ">
							Streamer
						</h1>
						<h2 className="subtitle is-3 has-text-grey">
							Broadcast you{" "}
						</h2>
					</div>
					<div className="column">{this.renderList()}</div>
					<div className="section has-background-light">
						{this.props.isSignedIn ? (
							<Link
								to={"/streams/new"}
								className="button is-link is-radiusless"
							>
								Create
							</Link>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		streams: Object.values(state.streams),
		CurrentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	};
};

export default connect(
	mapStateToProps,
	{ fetchStreams }
)(StreamList);
