import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let count = this.state.clickCount;
    count++;
    this.setState({ clickCount: count });
  }

  render() {
    const count = this.state.clickCount;
    if (count >= 15) {
      return <button onClick={this.handleClick} className='level-6'>Hot Button</button>;
    }
    if (count >= 12) {
      return <button onClick={this.handleClick} className='level-5'>Hot Button</button>;
    }
    if (count >= 9) {
      return <button onClick={this.handleClick} className='level-4'>Hot Button</button>;
    }
    if (count >= 6) {
      return <button onClick={this.handleClick} className='level-3'>Hot Button</button>;
    }
    if (count >= 3) {
      return <button onClick={this.handleClick} className='level-2'>Hot Button</button>;
    }
    return <button onClick={this.handleClick} className='level-1'>Hot Button</button>;
  }
}

export default HotButton;
