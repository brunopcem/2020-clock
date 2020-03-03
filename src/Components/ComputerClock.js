import React, {Component} from 'react';

class ComputerClock extends Component {
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
    let {date} = this.state;
    return (
      <div>
        <h2>A hora é essa ai: - {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default ComputerClock;