import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends Component {

    render() {


        return(
            <div className='map-container'>
                <Map
                    google={this.props.google}
                    style={{ width: '750px', height: '500px' }}
                    zoom={10}
                    initialCenter={
                        {
                            lat: 42.783430,
                            lng: -73.877840
                        }
                    }
                />
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyD7Y84IabokxzDUaoYJj5NauiFxU5lUsQk"
})(MapContainer)