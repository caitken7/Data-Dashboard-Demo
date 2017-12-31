import React, { Component}  from 'react';
import API from "../../../utils/API";

require('./countryCodes.js');

const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const cityMap = [
  {
    name: 'Chicago',
    lat: 41.878, 
    lng: -87.629
  },
  {
      name: 'New York',
      lat: 40.714, 
      lng: -74.005
  },
  {
      name: 'Los Angeles',
      lat: 34.052, 
      lng: -118.243
  },
  {
      name: 'Vancouver',
      lat: 49.25, 
      lng: -123.1
  },
  {
      name: 'Germany',
      lat: 51.165691, 
      lng: 10.451526
  },
  {
      name: 'France',
      lat: 46.227638, 
      lng: 2.213749
  },
  {
      name: 'Australia',
      lat: -25.274398, 
      lng: 133.775136
  },
  {
      name: 'UK',
      lat: 55.3781, 
      lng: -3.4360
  },
  {
      name: 'Italy',
      lat: 41.8719, 
      lng: 12.5674
  },
  {
      name: 'China',
      lat: 22.3964, 
      lng: 114.1095
  },
  {
      name: 'Japan',
      lat: 35.6895, 
      lng: 139.6917
  },
  {
      name: 'Brazil',
      lat: -22.9068, 
      lng: -43.1729
  },
  {
      name: 'South Korea',
      lat: 37.5665, 
      lng: 126.9780
  },
  {
      name: 'South Africa',
      lat: -30.5595, 
      lng: 22.9375
  }
];

cityMap.map(city => {
  if (city.name == "Chicago") {
    for (var i=0; i < 4023; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "New York") {
    for (var i=0; i < 514; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "Los Angeles") {
    for (var i=0; i < 411; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "UK") {
    for (var i=0; i < 958; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "Canada") {
    for (var i=0; i < 693; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "Australia") {
    for (var i=0; i < 481; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "France") {
    for (var i=0; i < 472; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "China") {
    for (var i=0; i < 402; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "Japan") {
    for (var i=0; i < 306; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "Brazil") {
    for (var i=0; i < 297; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "Germany") {
    for (var i=0; i < 186; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "South Korea") {
    for (var i=0; i < 168; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "Italy") {
    for (var i=0; i < 161; i++) {
      cityMap.push(city)
    }
  }

  if (city.name == "South Africa") {
    for (var i=0; i < 84; i++) {
      cityMap.push(city)
    }
  }
})

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
  defaultZoom={1}
  defaultCenter={{ lat: 30, lng: -5 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map((marker, i) => (
        <Marker
          key={i}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

class Map extends React.PureComponent {

  state = {
    markers: cityMap
  }

  // componentWillMount() {
  //   this.setState({ markers: [] })
  // }

  // componentDidMount() {

    

  //   const url = [
  //     // Length issue
  //     `https://gist.githubusercontent.com`,
  //     `/farrrr/dfda7dd7fccfec5474d3`,
  //     `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
  //   ].join("")

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ markers: data.photos });
  //     });
  // }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} id="map" class="animated fadeInUp" />
    )
  }
}

export default Map