import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleOpeningClick = this.handleOpeningClick.bind(this);
    this.handleClosingClick = this.handleClosingClick.bind(this);
  }

  handleOpeningClick() {
    this.setState({ isOpen: true });
  }

  handleClosingClick() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    let bar = '';
    let hide = '';
    let overlay = 'hidden';
    if (this.state.isOpen) {
      bar = 'open';
      hide = 'hidden';
      overlay = '';
    } else {
      bar = 'close';
    }
    return (
      <div className='container' onClick={this.handleClosingClick}>
        <div className={'overlay ' + overlay}></div>
        <div className='row front'>
        <i className={'fas fa-bars fa-xl top-space icon ' + hide} onClick={this.handleOpeningClick}></i>
          <div className={'col-fourth drawer front ' + bar}>
            <h1>Choose a Game</h1>
            <a className='link' onClick={this.handleClosingClick}>League of Legends</a>
            <a className='link' onClick={this.handleClosingClick}>Valorant</a>
            <a className='link' onClick={this.handleClosingClick}>Legend of Runetera</a>
            <a className='link' onClick={this.handleClosingClick}>Teamfight Tactic</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
