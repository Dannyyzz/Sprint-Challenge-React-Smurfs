import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addUpdateSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (this.props.updating) {
      axios.put(`http://localhost:3333/smurfs/${this.props.match.params.id}`,
          this.state
        )
        .then(res => {
          this.props.updateState(res.data);
          this.props.history.push("/");
        })
        .catch(err => console.log(err));
      return;
    } else {
      axios
        .post("http://localhost:3333/smurfs", this.state)
        .then(res => {
          this.props.updateState(res.data);
          this.props.history.push("/");
        })
        .catch(err => console.log(err));
    }

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  componentDidMount() {
    if (this.props.updating) {
      const id = this.props.match.params.id;
      const smurf = this.props.smurfs.find(smurf => `${smurf.id}` === id);

      this.setState({
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
      });
    } else {
      this.setState({
        name: "",
        age: "",
        height: ""
      });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addUpdateSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="How Short?"
            value={this.state.height}
            name="height"
          />
          <button type="submit">
            {this.props.update ? "Update" : "Add to Smurf Village!"}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
