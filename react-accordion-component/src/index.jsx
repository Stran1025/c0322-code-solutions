import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<Accordion input={[
  { name: 'HTML', title: 'Hyper Markup Language', description: 'Hypertext Markuup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web' },
  { name: 'CSS', title: 'Cascading Style Sheets', description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alonaside HTML and JavaScript' },
  { name: 'JS', title: 'JavaScript', description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation and first-class functions.' }]}/>);
