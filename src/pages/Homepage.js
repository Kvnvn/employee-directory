import React, { Component } from "react";
import API from "../utils/Api"
import Jumbotron from "../components/Jumbotron";
import Search from "../components/Search";
import Table from "../components/Table";
import Row from "../components/Row";

class Homepage extends Component{
state={
    users:[]
}
componentDidMount() {
    API.getAllEmployee().then(res => {
      this.setState({ users: res.data.results });
    }).catch(err => {
      console.log(err);
    });
  }
render(){
    return(
        <div>
            <Jumbotron/>
            <Search/>
            <Table>
        {this.state.users.map(user => (
          <Row
          key = {user.id}
          image = {user.picture.large}
          firstName = {user.name.first} 
          lastName = {user.name.last}
          phone = {user.phone}
          email = {user.email}
          dob = {user.dob.date}
          />
          
        ))}
      </Table>
      
            

            
        </div>
    )
}
}
export default Homepage;