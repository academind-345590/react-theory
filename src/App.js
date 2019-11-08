import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2005 },
      {name: 'Lada', year: 2015 },
      {name: 'Mazda', year: 1991 },
    ],
    pageTitle: 'React components'
  }

  changeTitleHandler=(newTitle)=>{
    this.setState({
      pageTitle: newTitle
    });
  }

  handleInput=(event)=>{
    this.setState({
      pageTitle: event.target.value
    });
  }

  render(){
    const divStyle={
      textAlign: 'center'
    };

    return (
      <div style={ divStyle }>
        <h1>{this.state.pageTitle}</h1>
        <div>
          <input type="text" onChange={this.handleInput} />
        </div>
        <button 
          onClick={this.changeTitleHandler.bind(this, 'Changed!')}
        >Change title</button>

        { this.state.cars.map((car, index)=>{
          return (
            <Car 
              key = {index}
              name = {car.name}
              year = {car.year}
              onChaneTitle = {this.changeTitleHandler.bind(this, car.name)}
            />
          )
        }) }
        
      </div>
    );    
  }
}

export default App;
