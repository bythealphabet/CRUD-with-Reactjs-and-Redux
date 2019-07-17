import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import NavItem from "./NavItem/NavItem";
import GoogleAuth from '../../GoogleAuth/GoogleAuth'

const Nav = ({ history }) => {
	const [active, setActive] = useState(false);

	return (
		<div className="container">
			<nav className="navbar is-transparent " style={{borderBottom: '.5px solid'}}>
				<div className="navbar-brand">
					<NavItem path={"/"}>
						<h1 className="title is-6">STREAMER</h1>
					</NavItem>

					<div
						onClick={() => setActive(!active)}
						className={`navbar-burger burger ${
							active ? "is-active" : ""
						} `}
						data-target="navbarExampleTransparentExample"
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<div
					onClick={() => setActive(!active)}
					id="navbarExampleTransparentExample"
					className={`navbar-menu ${active ? "is-active" : ""} `}
				>
					<div className="navbar-end">
						<NavItem path={'/'}>All Streams</NavItem>
						<NavItem path={''}><GoogleAuth /></NavItem>
					</div>
				</div>
			</nav>
		</div>
	);
};

const Header = withRouter(({ history }) => <Nav history={history} />);

export default Header;
