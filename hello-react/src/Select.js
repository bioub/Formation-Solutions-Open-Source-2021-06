import styles from './Select.module.css';
import { Component } from 'react';


class Select extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleItemClick = (value) => {
    this.props.onSelected(value);
    this.setState({
      open: false,
    });
  };

  render() {
    //     <div class="select" (click)="open = !open">{{ selected }}</div>
    // <div class="menu" *ngIf="open">
    //   <div *ngFor="let value of values" (click)="handleClick(value)">{{ value }}</div>
    // </div>

    // const itemsJsx = [];

    // for (const value of this.props.values) {
    //   itemsJsx.push(<div onClick={() => {}}>{value}</div>);
    // }

    const itemsJsx = this.props.values.map((value) => (
      <div key={value} onClick={() => this.handleItemClick(value)}>{value}</div>
    ));

    return (
      <div className="Select">
        <div className={styles.select} onClick={this.handleOpen}>
          {this.props.selected}
        </div>
        {this.state.open && <div className={styles.menu}>{itemsJsx}</div>}
      </div>
    );
  }
}

export default Select;
