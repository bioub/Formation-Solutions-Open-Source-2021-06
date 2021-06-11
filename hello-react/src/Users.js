import { Component } from 'react';
import { fetchUsers } from './api';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetchUsers().then((res) => {
      this.setState({
        users: res.data,
      });
    });
  }
  render() {
    return (
      <div className="Users">
        {this.state.users.map((u) => (
          <p key={u.id}>{u.name}</p>
        ))}
      </div>
    );
  }
}

export default Users;
