import './App.css';
import Counter from './Counter';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Hello name="Romain" /> {/* React.createElement(Hello, { name: 'Romain' }) */}
      <Counter />
    </div>
  );
}

export default App;
