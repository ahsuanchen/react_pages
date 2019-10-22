import React, {Component} from 'react';
import Product from './product';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MyMenu from './menu';
import Paper from '@material-ui/core/Paper';
import useStyles from "./style.js";
import { withStyles } from "@material-ui/core/styles";

// const styles = theme => ({
//   root: {
//     width: '85%',
//     marginTop: theme.spacing(3),
//     marginLeft: theme.spacing(3),
//     overflowX: 'auto',  },
//     table: {
//       minWidth: 450,
//     },
// });


class ProductList extends Component {
    state = {
        products: [
            {id:"0", desc:"iPad", price:20000, category:"平板電腦", inventory:33, safetyStock:25},
            {id:"1", desc:"iPhone X", price:30000, category:"智慧型手機", inventory:108, safetyStock:70}
        ]
    }

render() {
    const { classes } = this.props;
    return (
        <div>
            <MyMenu/>
            <Paper className={classes.main}>
            <Table className={this.props.classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Desc</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Inventory</TableCell>
                        <TableCell>safetyStock</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {this.state.products.map((product, index) => <Product key ={index} product={product}/>)}
                </TableBody> 
            </Table>
            </Paper>
         </div>
  );
 }

}
export default withStyles(useStyles) (ProductList); 

