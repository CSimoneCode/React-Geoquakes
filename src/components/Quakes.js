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
    let detail = this.state.earthquakes[this.state.currentIndex];
    let display;

    if (detail){
        display = <EarthQuake detail={detail} />
    }

    return(
      <div>
        { display }
      </div>
    )
  }

};

export default Quakes; 
  