import axios from 'axios';

export function fetchUsers() {
  return axios.get('https://jsonplaceholder.typicode.com/users');
}
