import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
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
      <div className='container' onClick={this.handleClick}>
        <div className={'overlay ' + overlay}></div>
        <div className='row front'>
        <i className={'fas fa-bars fa-xl top-space icon ' + hide} onClick={this.handleClick}></i>
          <div className={'col-fourth drawer front ' + bar}>
            <h1>Choose a Game</h1>
            <a className=''>League of Legends</a>
            <a className=''>Valorant</a>
            <a className=''>Legend of Runetera</a>
            <a className=''>Teamfight Tactic</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
