import streams from "../apis/streams";
import history from '../history'

import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	FETCH_STREAMS,
	FETCH_STREAM,
	DELETE_STREAM,
	EDIT_STREAM
} from "./types";

const signIn = userId => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

const createStream = data => async (dispatch, getState) => {
	const {userId} = getState().auth
	const response = await streams.post("/streams", {...data, userId});
	dispatch({ type: CREATE_STREAM, payload: response.data });
	// do some programatic navigation to 
	// get the user back to root route

	history.push('/')
};

const fetchStreams = () => async dispatch => {
	const response = await streams.get("/streams");
	dispatch({ type: FETCH_STREAMS, payload: response.data });
};

const fetchStream = id => async dispatch => {
	const response = await streams.get(`/streams/${id}`);
	console.log('resp:',response)
	dispatch({type: FETCH_STREAM, payload: response.data})
};

const editStream = (id, data) => async dispatch=>{
	const response = await streams.patch(`/streams/${id}`, data)
	console.log('response:',response)
	dispatch({type: EDIT_STREAM, payload: response.data})
	history.push('/')
}

const deleteStream = id => async dispatch =>{
	await streams.delete(`/streams/${id}`)
	dispatch({type: DELETE_STREAM, payload: id})
	history.push('/')
}


export { signIn, signOut, createStream, fetchStreams, fetchStream,editStream, deleteStream };
