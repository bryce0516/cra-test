import React from 'react';
import logo from './logo.svg';
import './App.css';
import bigImage from './big.png'
import smallImage from './small.png'
import TodoList from './TodoList.js'
import './test.css'
import Button from './Button3.js'
import Box from './Box3.js'


function App() {
  console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
  console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
  console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);
  return (

    <div className="App">
      <div>
        <Button size= 'big'/>
        <Button size= 'small'/>
        <Box size= 'big' />
        <Box size= 'small' />
      </div>
    <TodoList />
    <img src={bigImage} alt="big"/>
    <img src={smallImage} alt="small" />
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
      </header>
    </div>
  );
}

export default App;
