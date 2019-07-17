import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"657494635076-nj1qjq6k3gce84j1r92e5ssokaq1hhsh.apps.googleusercontent.com",
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				})
				.catch(err => {
					console.log("err:", err);
				});
		});
	}

	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	signInHandler = () => {
		this.auth.signIn();
	};

	signOutHandler = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<div className="button is-danger" onClick={this.signOutHandler}>
					Sign Out
				</div>
			);
		} else {
			return (
				<div className="button is-danger" onClick={this.signInHandler}>
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png"
						alt=""
						style={{
							paddingRight: ".3rem",
							marginRight: "1rem",
							borderRight: "solid .2px"
						}}
					/>{" "}
					Login with Google
				</div>
			);
		}
	}

	render() {
		return <div className={` `}>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
	mapStateToProps,
	{ signIn, signOut }
)(GoogleAuth);
