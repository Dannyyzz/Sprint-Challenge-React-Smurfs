import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>Smurf Name: {props.name}</h3>
      <strong>Height: {props.height}</strong>
      <p>Age: {props.age}</p>
      <div>
        <button type="button">Update</button>
        <button onClick={e => props.deleteSmurf(e, props.id)} type="button">Delete</button>
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

