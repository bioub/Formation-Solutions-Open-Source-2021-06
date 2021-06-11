import { Component } from 'react';

class CounterControlled extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onIncrement(this.props.count + 1);
  }

  render() {
    return (
      <button className="CounterControlled" onClick={this.handleClick}>
        {this.props.count}
      </button>
    );
  }
}

export default CounterControlled;
