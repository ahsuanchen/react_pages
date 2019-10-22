import React from 'react';
import Student from './student'
 
export default class StudentList extends React.Component{
     
    render() {
        var students = this.props.students.map((student, i) =>
            <Student key={i} student={student}/>
        );
         
        return (
            <table>
                <tbody>
                    <tr>
                        <th>身分證字號</th>
                        <th>姓名</th>
                        <th>性別</th>
                    </tr>
                    {students}
                </tbody>
            </table>
        )
    }
}