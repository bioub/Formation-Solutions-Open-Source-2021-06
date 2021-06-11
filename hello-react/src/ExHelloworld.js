import { Component } from 'react';

class ExHelloworld extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Romain' };
    this.updateName = this.updateName.bind(this);
  }
  updateName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  render() {
    return (
      <div className="ExHelloworld">
        <div>
          Prenom : <input value={this.state.name} onChange={this.updateName} />
        </div>
        <p>Bonjour {this.state.name}</p>
      </div>
    );
  }
}

export default ExHelloworld;
