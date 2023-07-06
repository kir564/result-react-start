import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  // декларативный стиль - это объявление тегов, которое указывает какая сущность получиться, вызов функций; императивный - описание параметров (className, src, alt  и т.п), вложенность ??

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{new Date().getFullYear()}</div>
      </header>
    </div>
  );
}

export function AppWithoutJSX() {
  return (
    React.createElement('div', {className: 'App'}, React.createElement(
      'header', {className: 'App-header'}, [
        React.createElement('img', {className: 'App-logo', alt: 'logo', src: logo, key: 1}),
        React.createElement('p', {key: 2}, `Edit ${React.createElement('code'), {key: 3}, 'src/App.js'} and save to reload.`),
        React.createElement('a', {className: 'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer', key: 4}, 'Learn React'),
        React.createElement('div', {key: 5}, `${new Date().getFullYear()}`)
      ]
    ))
  )
}

export default App;
