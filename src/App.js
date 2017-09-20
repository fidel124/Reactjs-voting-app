import React, { Component } from 'react';

import Contestants from './components/contestants';
import Results from './components/result';
import './App.css';

class App extends Component {  
  render() {
    return (
      <div className="container">                
        <Contestants/>
        <hr />  
        <Results />                  
      </div>
    );
  }
}

export default App;