import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel input={[
  { url: 'https://legends.pokemon.com/assets/pokemon/pokemon_rowlet.png' },
  { url: 'https://cdn.cnn.com/cnnnext/dam/assets/210226041621-04-pokemon-anniversary-design-full-169.jpg' },
  { url: 'https://assets.reedpopcdn.com/pokemon-go-type-chart-1469459723629.jpg/BROK/thumbnail/1600x800/format/jpg/quality/80/pokemon-go-type-chart-1469459723629.jpg' }
]}/>);
