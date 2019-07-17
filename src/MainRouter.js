import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import StreamCreate from "./components/Streams/StreamCreate";
import StreamDelete from "./components/Streams/StreamDelete";
import StreamEdit from "./components/Streams/StreamEdit";
import StreamList from "./components/Streams/StreamList";
import StreamShow from "./components/Streams/StreamShow";

const MainRouter = props => {
	return (
		<div className={` `}>
			<Layout>
				<Switch>
					<Route exact path={"/"} component={StreamList} />
					<Route exact path={"/streams/new"} component={StreamCreate} />
					<Route exact path={"/streams/:id"} component={StreamShow} />
					<Route exact path={"/streams/edit/:id"} component={StreamEdit} />
					<Route
						path={"/streams/delete/:id"}
						exact
						component={StreamDelete}
					/>
				</Switch>
			</Layout>
		</div>
	);
};

export default MainRouter;
