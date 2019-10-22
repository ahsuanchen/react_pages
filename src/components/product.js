import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
 
export default class Product extends Component{

  render(){
    return (
        <TableRow>
        <TableCell>{this.props.product.id}</TableCell>
        <TableCell>{this.props.product.desc}</TableCell>
        <TableCell> {this.props.product.price}</TableCell>
        <TableCell> {this.props.product.category}</TableCell>
        <TableCell> {this.props.product.inventory}</TableCell>
        <TableCell> {this.props.product.safetyStock}</TableCell>
        </TableRow>
//      <li>{this.props.product.id} / {this.props.product.desc} / {this.props.product.price} / {this.props.product.category} / {this.props.product.inventory} / {this.props.product.safetyStock}</li>
    )
    
  }
    
}