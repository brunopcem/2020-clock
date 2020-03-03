import React, {Component} from 'react';

class WorldClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
    this.state = {date: new Date};
  }

  render() {
    let {isLoaded, date} = this.state;
    if(!isLoaded){
      return(
        <div>
          <h2>Loading...</h2>
        </div>
      )
    }
    return (
      <div>
        <h2>A hora talvez seja essa ai: - {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default WorldClock;