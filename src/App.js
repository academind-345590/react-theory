import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  render(){
    const divStyle={
      textAlign: 'center'
    };
    return (
      <div style={ divStyle }>
        <h1> Hello word !</h1>

        <Car name={'Ford'} year={2005}/>
        <Car name="Lada" year={2015}/>
        <Car name={'Volga'} year={1991}/>
      </div>
    );    
  }
}

export default App;
