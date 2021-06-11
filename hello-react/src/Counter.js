import { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      // count: this.state.count + event.clientX,
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <button className="Counter" onClick={this.handleClick}>
        {this.state.count}
      </button>
    );
  }
}

export default Counter;
