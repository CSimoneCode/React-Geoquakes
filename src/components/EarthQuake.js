import React from 'react';

class EarthQuake extends React.Component {
  constructor(props) {
    super(props);
  };


    convertTime(raw) {
      let seconds = parseInt((raw/1000) % 60),
          minutes = parseInt((raw/(1000 * 60)) % 60),
          hours = parseInt((raw/(1000 * 60 * 60)) % 24),
          days = parseInt((raw/100 * 60 * 60 * 24) % 7);
          
          return `Quake occurred ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds ago`;
    };


  render() {
    return(
      <ul>
        <li>
          <div>
          <p>Magnitude: { this.props.quakeMag }</p>
          <p>{ this.convertTime(this.props.elapsedTime) }</p>
          <p>Approximately { this.props.location }</p>
          </div>
        </li>
      </ul>
    )}
};


export default EarthQuake;
  