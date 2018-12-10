import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
	constructor(){
		super()
		this.state = {
			map: null
		}
	}

	mapDragged(){
		var latLng = this.state.map.getCenter().toJSON()
//		console.log('mapDragged: '+JSON.stringify(latLng))
		this.props.mapMoved(latLng)

	}

	render(){
		const mapContainer = <div style={{minHeight:1000, height:'100%', width:'100%'}}></div>

		const markers = this.props.markers.map((venue, i) => {

				const marker = {
					position: {
						lat: venue.location.lat,
						lng: venue.location.lng
					}
				}

				return <Marker key={i} {...marker} />
		})


		return (
		    <GoogleMapLoader
		        containerElement = { mapContainer }
		        googleMapElement = {
			        <GoogleMap
			            ref={ (map) => {
				            	if (this.state.map != null)
				            		return

			            		this.setState({map: map})
			             	}
			         	}

									// markers={markers}
			            defaultZoom={this.props.zoom}
			            defaultCenter={this.props.center}
			            onDragend={this.mapDragged.bind(this)}
			            options={{streetViewControl: false, mapTypeControl: false}}>
									{ markers }
			        </GoogleMap>
		    	} />
		)
	}

}

export default Map
