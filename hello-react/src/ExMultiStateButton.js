import { Component } from 'react';

class ExMultiStateButton extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.nextIndex = this.nextIndex.bind(this);
  }
  nextIndex() {
    this.setState({
      index: (this.state.index + 1) % this.props.values.length,
    });
  }
  render() {
    const color = this.props.values[this.state.index];
    return (
      <button
        className="ExMultiStateButton"
        style={{ backgroundColor: color }}
        onClick={this.nextIndex}
      >
        {color}
      </button>
    );
  }
}

export default ExMultiStateButton;
