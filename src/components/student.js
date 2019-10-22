import React from 'react';
 
export default class Student extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.student.fields.id}</td>
                <td>{this.props.student.fields.name}</td>
                <td>{this.props.student.fields.gender}</td>
            </tr>
        )
    }
}