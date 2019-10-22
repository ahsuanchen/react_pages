import React from 'react';
import axios from 'axios';

export default class CustomerAdd extends React.Component{

    handleChange=(event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit=(event)=> {
        //event.preventDefault();

        const customer = {
          id:0,
          name: this.state.name,
          address: this.state.address,
          weight: this.state.weight
        };

        axios.post("/customer/",  customer )
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
              address:
              <input type="text" name="address" onChange={this.handleChange}/>
            </label>
            <label>
              weight
              <input type="text" name="weight" onChange={this.handleChange} />
            </label>

            <button type="submit">Add</button>
          </form>

            </div>
        )
    }
}