import React from "react";

const flex = {
	display: "flex",
	justifyContent: "flex-end"
};

const Modal = props => {
	return (
		<div className="modal is-active">
			<div className="modal-background" onClick={props.onDismis} />
			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title">{props.title}</p>
				</header>
				<section className=" modal-card-body">
					<p className=" is-large has-text-centered">
						{props.content}
					</p>
				</section>
				<footer className="modal-card-foot is-radiusless" style={flex}>
					{props.actions}
				</footer>
			</div>
		</div>
	);
};

export default Modal;
