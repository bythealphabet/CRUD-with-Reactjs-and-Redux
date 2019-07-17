import React from "react";
import {connect} from "react-redux"
import {fetchStream} from '../../actions'

class StreamShow extends React.Component {

	componentDidMount(){
		this.props.fetchStream(this.props.match.params.id)
	}
	render() {
		
		if(!this.props.stream){
			return <div>Loading....</div>
		}

		const {title, description} = this.props.stream

		return (
				 <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
          <div className="content">
           <p>{description}</p>
          </div>
        </div>
      </div>
			);
	}
}

const mapStateToProps = (state, ownProps) =>{
	console.log('state:',state)
	return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);




