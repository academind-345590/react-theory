import React from 'react';
import Radium from 'radium';
import classes from './Car.css';

class Car extends React.Component {
  render(){
    const inputClasses = [classes.input];
    const style = {
      border: '1px solid #ccc',
      boxShadow: '0 4px 5px 0 rgba(0,0,0,0, .14)',
      ':hover': {
        border: '3px solid aqua',
        boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)',
        cursor: 'pointer'
      }
    }

    if(this.props.name !== ''){
      inputClasses.push(classes.green);
    } else {
      inputClasses.push(classes.red);
    }

    if(this.props.name.length > 4){
      inputClasses.push(classes.bold);
    }

    return (
      <div className={classes.Car} style={style}>    
        <h3>Car name: { this.props.name }</h3>
        <p>Year: <strong>{ this.props.year }</strong></p>
        <input 
          className={inputClasses.join(' ')}
          type="text" 
          onChange={this.props.onChaneName} 
          value={this.props.name} 
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

export default Radium(Car)