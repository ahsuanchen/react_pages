import React from 'react';
import Customer from './customer.js'
 
export default class CustomerList extends React.Component{
     
    render() {
        var customers = this.props.customers.map((customer, i) =>
            <Customer key={i} customer={customer}/>
        );
         
        return (
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>address</th>
                        <th>weight</th>
                    </tr>
                    {customers}
                </tbody>
            </table>
        )
    }
}