import React, { Component } from 'react';

class SearchBar extends Component {
  //initialise state old getInitialState
  constructor(props){
    super(props);
    //initialising what we want to keep track of and record change of
    this.state = {term: ''};
  }
  render() {
    return (
      <div>
        <input onChange={e => this.setState({ term: e.target.value })}/>
      </div>
    );
  }
}


//to show this, we need a reference to it ... tada export

export default SearchBar;
