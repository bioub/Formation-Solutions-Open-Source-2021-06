import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Users from './Users';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Route path="/" component={Home} exact />
        <Route path="/users" component={Users} />
      </div>
    </BrowserRouter>
  );
}

export default App;
