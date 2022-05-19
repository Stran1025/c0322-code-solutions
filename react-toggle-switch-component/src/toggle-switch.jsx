import React from 'react';
class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isOn) {
      this.setState({ isOn: false });
    } else {
      this.setState({ isOn: true });
    }
  }

  render() {
    if (this.state.isOn) {
      return (
        <div className="enviroment on">
          <div className="switch-outer on" onClick={this.handleClick}>
            <div className="switch-inner on"></div>
          </div>
          <p className='space'>On</p>
        </div>
      );
    }
    return (
    <div className="enviroment">
      <div className="switch-outer" onClick={this.handleClick}>
        <div className="switch-inner"></div>
      </div>
      <p className='space'>Off</p>
    </div>
    );
  }

}

export default ToggleSwitch;
