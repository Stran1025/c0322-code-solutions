import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <button className='item-title' data-tab={this.props.name}>{this.props.title}</button>
    );
  }
}

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <p className={'description ' + this.props.hidden} data-tab={this.props.name}>{this.props.description}</p>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.hasAttribute('data-tab')) {
      this.setState({ activeTab: event.target.getAttribute('data-tab') });
    }
  }

  render() {
    return (
      <div className='center'>
          {this.props.input.map(item => {
            let active = 'hidden';
            if (this.state.activeTab === item.name) {
              active = '';
            }
            return (
              <div key={item.name} onClick={this.handleClick}>
                <Title name={item.name} title={item.title} onClick={this.handleClick}/>
                <Description hidden={active} name={item.name} description={item.description}/>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Accordion;
