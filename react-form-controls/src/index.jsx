import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value, password: this.state.password });
  }

  handlePasswordChange(event) {
    this.setState({ username: this.state.username, password: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        </label>
        <button type="submit" value="Submit">Sign Up</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm/>);
