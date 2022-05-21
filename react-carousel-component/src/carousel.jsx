import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 0,
      totalImg: this.props.input.length
    };
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.weewoo = setInterval(this.handleRight, 5000);
    this.handleDot = this.handleDot.bind(this);
  }

  handleLeft() {
    let index = this.state.currentImg;
    if (this.state.currentImg === 0) {
      let lastImg = this.state.totalImg;
      lastImg--;
      this.setState({ currentImg: lastImg });
      return;
    }
    index--;
    this.setState({ currentImg: index });
  }

  handleRight() {
    let index = this.state.currentImg;
    let lastImg = this.state.totalImg;
    lastImg--;
    if (this.state.currentImg === lastImg) {
      this.setState({ currentImg: 0 });
      return;
    }
    index++;
    this.setState({ currentImg: index });
  }

  handleDot(event) {
    this.setState({ currentImg: parseInt(event.target.getAttribute('data-index')) });
  }

  render() {
    return (
      <div>
        <div className='carousel flex'>
          <i className='fas fa-angle-left fa-2xl left' onClick={this.handleLeft}></i>
          {this.props.input.map((img, index) => {
            let active = 'hidden';
            if (index === this.state.currentImg) {
              active = '';
            }
            return (
              <div key={index} className={'holder ' + active}>
                <Image url={img.url} />
              </div>
            );
          })}
          <i className='fas fa-angle-right fa-2xl right' onClick={this.handleRight}></i>
        </div>
        <div className='dot-holder'>
          {this.props.input.map((img, index) => {
            let active = '';
            if (this.state.currentImg === index) {
              active = 'active';
            }
            return <div key={index} data-index={index} className={'dot ' + active} onClick={this.handleDot}></div>;
          })}
        </div>
      </div>
    );
  }
}

class Image extends React.Component {
  render() {
    return (
      <img src={this.props.url}></img>
    );
  }
}

export default Carousel;
