import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} short</strong>
      <p>{props.age} smurf years old</p>
      <div>
      <button type="button">Update</button>
      <button onClick={ e => props.deleteSmurf(e, props.id) } type="button">Delete</button>
    </div>
    </div>
    
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

