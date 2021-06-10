import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Hello name="Romain" /> {/* React.createElement(Hello, { name: 'Romain' }) */}
    </div>
  );
}

export default App;
