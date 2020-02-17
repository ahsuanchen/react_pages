import React, {Component} from 'react';

export default class Click extends Component {
 
 constructor(){
  super();
  this.state={counter:0}; 
 }
    
 handleClick = () => {
    this.setState(prevState => {
        return ({
         count: prevState.counter += 1
        });
    });
 }

 render() {
  return (
   <button onClick={this.handleClick}>{this.state.count}</button>
  );
 }

}