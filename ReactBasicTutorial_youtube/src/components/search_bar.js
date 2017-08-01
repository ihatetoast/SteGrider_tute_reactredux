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
      <div className="search-bar">
        <input onChange={e => this.onInputChange( e.target.value)}/>
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


//to show this, we need a reference to it ... tada export

export default SearchBar;
