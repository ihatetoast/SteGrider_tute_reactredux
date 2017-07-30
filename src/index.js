import React from 'react';
import ReactDOM from 'react-dom';

//create a new component. this component should produce some html
//will never change, so App is a const



const App = () => {
  return  <div>Hi</div>;
}

//Take this component's generated html and put it on the page/in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
