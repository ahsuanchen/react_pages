import React from 'react';
import axios from 'axios';

export default class EmployeeAdd extends React.Component{

    handleChange=(event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit=(event)=> {
        //event.preventDefault(); 
    
        const employee = {
          id:0,
          name: this.state.name,
          department: this.state.department
        };
        
        axios.post("/employee/",  employee )
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        
    }
    
    render() {
         
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>
              Person Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label>
              Department:
              <input type="text" name="department" onChange={this.handleChange} />
            </label>

            <button type="submit">Add</button>
          </form>
          
            </div>
        )
    }
}