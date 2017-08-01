import React, { Component } from 'react';
import { connect } from 'react-redux';
//promote a component to container. a connection to redux (also called a smart comp)

class BookList extends Component {
  renderList(){
    return this.props.books.map(book => {
      return(
        <li
          key={book.title}
          className="list-group-item">
            {book.title}
        </li>
      );
    });
  }
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//define a fcn to take app state as an argument and whatever
//gets returned will show up as props inside of BookList

//example: return {monkeySnot:'ew'} here and ...
//render(){//console.log(thos.props.monkeySnot)} will give "ew"
//THIS IS THE GLUE BTWN REACT AND REDUX
function mapStateToProps(state){
  return {
    books: state.books
  }
}

//now for connect takes a fcn and component and produces a container
//cont is a comp that is aware of the state that is contained by redux
export default connect(mapStateToProps)(BookList);
