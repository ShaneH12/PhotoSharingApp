import React, { Component } from 'react'
import { Map } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'

class MapNavigation extends Component {

	constructor(){
		super()
		this.state = {
			map: null
		}
	}

	setNewLocation(location){
//		console.log('setNewLocation: '+JSON.stringify(location))
		this.props.updateCurrentLocation(location)
	}


	render(){

		const markers = [
			{
				location: {
					lat: 40.7575285,
					lng: -73.9884469
				}
			}
		]

		return (
			<div>
				<Map
					center={this.props.posts.currentLocation}
					zoom={14}
					mapMoved={this.setNewLocation.bind(this)}
					markers={markers} />
			</div>
		)
	}
}


const stateToProps = (state) => {
	return {
		posts: state.post
	}
}

const dispatchToProps = (dispatch) => {
	return {
		updateCurrentLocation: (location) => dispatch(actions.updateCurrentLocation(location))

	}
}

export default connect(stateToProps, dispatchToProps)(MapNavigation)
