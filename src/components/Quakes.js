import React from 'react';    
import axios from 'axios';
import EarthQuake from './EarthQuake';



class Quakes extends React.Component {
    state = {
      earthquakes: [],
      currentIndex: 0,
    }

  componentDidMount() {
    axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson")
    .then((response) => {
      console.log(response.data.features)
      this.setState({ earthquakes: response.data.features })
    })
    .catch((err) => console.log(err))
  };


  render() {
    const quakeList = [];
    this.state.earthquakes.forEach((quake) => {
      let quakeMag = quake.properties.mag;
      let elapsedTime = quake.properties.time;
      let location = quake.properties.place;
      let key = quake.id
      quakeList.push(<EarthQuake key={key} quakeMag={quakeMag} elapsedTime={elapsedTime} location={location} />);
    });
    return(
      <div>
      { quakeList }
      </div>
    )}
};

export default Quakes; 
  