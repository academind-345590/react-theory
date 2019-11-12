import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cars: [
        {name: 'Ford', year: 2005 },
        {name: 'Lada', year: 2015 },
        {name: 'Mazda', year: 1991 },
      ],
      pageTitle: 'React components',
      showCars: false,
    }
  }

  deleteHandler(index){
    const cars = this.state.cars.concat();
    cars.splice(index,1);
    this.setState({cars});
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
              onDelete = {this.deleteHandler.bind(this, index)}
              onChaneName = {(event) => this.onChaneName(event.target.value, index)}
            />
        )
      }) 
    }
    

    return (
      <div style={ divStyle }>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>
        <button 
          className={'AppButton'}
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>
      </div>
    );    
  }
}

export default App;
