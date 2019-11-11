import React from 'react';
import Radium from 'radium';
import classes from './Car.css';

const Car = props => { 
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

  if(props.name !== ''){
    inputClasses.push(classes.green);
  } else {
    inputClasses.push(classes.red);
  }

  if(props.name.length > 4){
    inputClasses.push(classes.bold);
  }

  return (
    <div className={classes.Car} style={style}>    
      <h3>Car name: { props.name }</h3>
      <p>Year: <strong>{ props.year }</strong></p>
      <input 
        className={inputClasses.join(' ')}
        type="text" 
        onChange={props.onChaneName} 
        value={props.name} 
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default Radium(Car)