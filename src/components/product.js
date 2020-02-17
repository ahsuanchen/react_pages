import React, {Component} from 'react';

 
export default class Product extends Component{

  render(){
    return (      
      <li>{this.props.product.id} / {this.props.product.desc} / {this.props.product.price} / 
       {this.props.product.category} / {this.props.product.inventory} / {this.props.product.safetyStock}</li>
    )
    
  }
    
}