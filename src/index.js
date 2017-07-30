import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

//youtube api key:
const API_KEY = 'AIzaSyDbhP2tIV_r30WPLk_J8jssq4-l-yT5U8I';
//pkg for search req npm pkg youtube search

//create a new component. this component should produce some html
//will never change, so App is a const



const App = () => {
  return  (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component's generated html and put it on the page/in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
