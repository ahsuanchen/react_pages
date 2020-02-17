import React, {Component} from 'react';
import Product from './product';

export default class ProductList extends Component {
    state = {
        products : [
            {id:"001", desc:"ASUS", price:70000 , category:"computer" , inventory:100 , safetyStock:50},
            {id:"002", desc:"APPLE", price:80000 , category:"notebook" , inventory:150 , safetyStock:80}
        ]
    };

 render() {
  return (
   <ul>
    { this.state.products.map(product => <Product product={product}/>)}
   </ul>
  );
 }

}