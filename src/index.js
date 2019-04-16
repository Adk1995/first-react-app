import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
// const element = <h1>Hello World</h1>;
//


var el = React.createElement(
  'h1',
  null,
  'Hello World'
);

ReactDOM.render(<Counter/>, document.getElementById('root'));
