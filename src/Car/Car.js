import React from 'react';

export default props => (
  <div style={{
    display: 'block',
    padding: '10px',
    border: '2px solid #ccc',
    marginBottom: '10px',
    boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
    borderRadius: '5px'
  }}>    
    <h3>Car name: { props.name }</h3>
    <p>Year: <strong>{ props.year }</strong></p>
    <input type="text" onChange={props.onChaneName} value={props.name} />
    <button onClick={props.onDelete}>Delete</button>
  </div>
)