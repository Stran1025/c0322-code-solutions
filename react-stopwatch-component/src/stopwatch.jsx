import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTicking: false,
      time: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    if (this.state.isTicking) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      let count = this.state.time;
      count++;
      this.setState({ isTicking: this.state.isTicking, time: count });
    }, 1000);
    this.setState({ isTicking: true, time: this.state.time });
  }

  stopTimer() {
    clearInterval(this.interval);
    this.setState({ isTicking: false, time: this.state.time });
  }

  reset() {
    if (!this.state.isTicking) {
      this.setState({ isTicking: this.state.isTicking, time: 0 });
    }
  }

  render() {
    let icon = '';
    const count = this.state.time;
    if (this.state.isTicking) {
      icon = 'fa-pause';
    } else {
      icon = 'fa-play';
    }
    return <div className="center">
      <div className="circle" onClick={this.reset}>
        <p className="count">{count}</p>
      </div>
      <i className={'fas ' + icon} onClick={this.handleClick}></i>
    </div>;
  }
}

export default Stopwatch;
