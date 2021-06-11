import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import CounterControlled from './CounterControlled';
import ExHelloworld from './ExHelloworld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import Select from './Select';

function App() {
  // const tableau = useState(12);
  // const count = tableau[0];
  // const setCount = tableau[1];

  // avec une classe
  // le state est un object
  // {
  //   count: 12,
  //   prenom: 'Toto'
  // }

  // avec useState
  // le state est un tableau
  // [12, 'Toto']
  // l'ordre des appels à useState détermine la position du tableau

  const [count, setCount] = useState(12); // state0
  const [prenom, setPrenom] = useState('Toto'); // state1
  const [color, setColor] = useState('green'); // state3
  return (
    <div className="App">
      <Hello name="Romain" /> {/* React.createElement(Hello, { name: 'Romain' }) */}
      <Hello name={prenom} />
      <Counter />
      <Counter />
      <CounterControlled count={count} onIncrement={(v) => setCount(v)} />
      <CounterControlled count={count} onIncrement={setCount} />
      <CounterControlled count={count} onIncrement={setCount} />
      <ExHelloworld />
      <ExMultiStateButton values={['red', 'green', 'blue']} />
      <Select values={['red', 'green', 'blue']} selected={color} onSelected={setColor} />
      <p>Vous avez sélectionné : {color}</p>
    </div>
  );
}

export default App;
