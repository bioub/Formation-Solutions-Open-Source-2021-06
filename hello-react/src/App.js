import './App.css';
import Counter from './Counter';
import ExHelloworld from './ExHelloworld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';

function App() {
  const prenom = 'Toto';
  return (
    <div className="App">
      <Hello name="Romain" /> {/* React.createElement(Hello, { name: 'Romain' }) */}
      <Hello name={prenom} />
      <Counter />
      <ExHelloworld />
      <ExMultiStateButton values={['red', 'green', 'blue']} />
    </div>
  );
}

export default App;
