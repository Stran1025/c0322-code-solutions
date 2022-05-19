import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '', response: ' ' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const digit = /([0-9])\d*/g;
    const capital = /([A-Z])\d*/g;
    if (this.state.password.length < 8) {
      this.setState({ password: event.target.value, response: 'Your passwords is too short' });
      return;
    }
    if (!this.state.password.match(digit)) {
      this.setState({ password: event.target.value, response: 'Your passwords must contain a number' });
      return;
    }
    if (!this.state.password.match(capital)) {
      this.setState({ password: event.target.value, response: 'Your passwords must contain a capital letter' });
      return;
    }
    this.setState({ password: event.target.value, response: '' });
  }

  render() {
    let icon = 'fa-x';
    if (this.state.response === '') {
      icon = 'fa-check';
    }
    return (
      <form>
        <label htmlFor='password' className='block'>Password</label>
        <input id='password' className='for-fun' type="password" value={this.state.password} onChange={this.handleChange}></input>
        <i className={'fas ' + icon}></i>
        <p>{this.state.response}</p>
      </form>
    );
  }
}

export default ValidatedInput;
