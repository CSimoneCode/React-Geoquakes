import React from 'react';

class EarthQuake extends React.Component {
  constructor(props) {
    super(props);
  };

  // I slightly tweaked this code from an answer in Stack Overflow
  convertTime() {
    let raw = this.props.detail.properties.time
    let seconds = parseInt((raw/1000) % 60),
        minutes = parseInt((raw/(1000 * 60)) % 60),
        hours = parseInt((raw/(1000 * 60 * 60)) % 24);
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        
        return `Quake occured ${hours} hours ${minutes} minutes ${seconds} seconds ago.`;
  }


  render() {
    let wholeTime = this.convertTime();
    //if (hours in wholeTime < 168){
    return(
      <ul>
        <li>
          <div>
          <p>{ this.props.detail.properties.mag }</p>
          <p>{ this.convertTime() }</p>
          <p>{ this.props.detail.properties.place }</p>
          </div>
        </li>
      </ul>
    )
  //}
};
}

export default EarthQuake;
  