import React, { Component } from 'react';
import './App.scss';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor(props){
    console.log("App constructor");
    super(props);
    this.state = {
      cars: [
        {name: 'Ford', year: 2005 },
        {name: 'Lada', year: 2015 },
        {name: 'Mazda', year: 1991 },
      ],
      pageTitle: 'React components',
      showCars: false,
      clicked: false,
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

  //life cicle
  UNSAFE_componentWillMount(){
    console.log("App componentWillMount");
  }
  componentDidMount(){
    console.log("App componentDidMount");
  }

  render(){
    console.log("App render");
    const divStyle={
      textAlign: 'center'
    };

    let cars = null;
      if (this.state.showCars){
        cars = this.state.cars.map((car, index)=>{
          return (
            <ErrorBoundary key = {index}>
              <Car               
                name = {car.name}
                year = {car.year}
                index = {index}
                onDelete = {this.deleteHandler.bind(this, index)}
                onChaneName = {(event) => this.onChaneName(event.target.value, index)}
              />
            </ErrorBoundary>
        )
      }) 
    }
    

    return (
      <div style={ divStyle }>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        
        <br />
        <button
          style={{marginTop: 20}} 
          className={'AppButton'}
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>
        <button onClick={()=> this.setState({clicked: true})}>Change Counter 2</button>
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
