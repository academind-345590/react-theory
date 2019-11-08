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
    pageTitle: 'React components',
    showCars: false,
  }

  onChaneName(name, index){
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({cars});
  }

  toggleCarsHandler=()=>{
    this.setState({
      showCars: !this.state.showCars
    });
  }

  render(){
    const divStyle={
      textAlign: 'center'
    };

    let cars = null;
      if (this.state.showCars){
        cars = this.state.cars.map((car, index)=>{
          return (
            <Car 
              key = {index}
              name = {car.name}
              year = {car.year}
              onChaneName = {(event) => this.onChaneName(event.target.value, index)}
            />
        )
      }) 
    }
    

    return (
      <div style={ divStyle }>
        <h1>{this.state.pageTitle}</h1>
        <button 
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        { cars }

      </div>
    );    
  }
}

export default App;
