import React from 'react';
 
export default class Customer extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.customer.id}</td>
                <td>{this.props.customer.name}</td>
                <td>{this.props.customer.address}</td>
                <td>{this.props.customer.weight}</td>
            </tr>
        )
    }
}

