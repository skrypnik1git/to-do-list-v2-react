import React, { Component }  from 'react';
import Home from './pages/Home'
import './App.css';

class App extends Component {
    render() {
      return (
        <>
        <h1>
          To-Do List
        </h1>
        <Home />
        </>
      )
    }
}

export default App;