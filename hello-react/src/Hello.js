import React from 'react';

function Hello(props) {
  // const divEl = document.createElement('div');
  // div.className = 'Hello';
  // const textHello = document.createTextNode('Hello ');
  // divEl.appendChild(textHello);
  // const spanEl = document.createElement('span');
  // spanEl.innerText = 'Romain'
  // divEl.appendChild(spanEl);
  // const rootEl = document.querySelector('#root');
  // rootEl.appendChild(divEl);

  // return React.createElement(
  //   'div',
  //   { className: 'Hello' },
  //   'Hello ',
  //   React.createElement('span', {}, 'Romain'),
  // );

  return (
    <div className="Hello">
      Hello <span>{props.name}</span>
    </div>
  );
}

export default Hello;
