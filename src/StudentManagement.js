import React, {Component} from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import { Redirect } from 'react-router';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import * as api from './api';
import StudentTableElement from './StudentTableElement';

export default class StudentsTable extends Component  {
  constructor(props){
    super(props);
    this.state = {
        users : [],
        redirect : false
    }
  }


  componentDidMount() {
      api.getAllUser().then(response => {
          // console.log(response.status);
          this.setState({users : response.users});
      })
  }

  onDisapprove = (props) => {
      console.log(props);
      api.disapproveUser(props);
       this.setState({redirect:true})
  }

  onApproveAdmin = (props) => {
        console.log(props);
        api.approveAdmin(props);
      this.setState({redirect:true})
  }

  onApproveStudent = (props) => {
        console.log(props);
        api.approveStudent(props);
      this.setState({redirect:true})
  }




    render () {
      const {users,redirect} = this.state
        if(redirect){
          return   <Redirect to ='/admin'/>;
        }
    return(
      <div>
          <section>
              <h1>Users</h1>
              <div className="tbl-header">
                  <table cellPadding="0" cellSpacing="0" border="0">
                      <thead>
                      <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Nickname</th>
                          <th>ID</th>
                          <th>Role</th>
                          <th></th>
                      </tr>
                      </thead>
                  </table>
              </div>
              <div className="tbl-content">
                  <table cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                      {users.map((each) => {
                          return <StudentTableElement firstName = {each.firstName} lastName = {each.lastName}
                                                      nickname = {each.nickName} id = {each.id}
                                                      status = {each.role} onDisapprove={this.onDisapprove.bind(this)}
                                                      onApproveAdmin={this.onApproveAdmin.bind(this)}
                                                      onApproveStudent={this.onApproveStudent.bind(this)}/>
                      })}

                      {/*<StudentTableElement firstName="jar" lastName="han" nickname="lookyee" id="5880036"*/}
                                           {/*status="Registering"/>*/}
                      {/*<StudentTableElement firstName="jar" lastName="han" nickname="lookyee" id="5880036"*/}
                                           {/*status="Registering"/>*/}

                      </tbody>
                  </table>
              </div>
          </section>
      </div>
  )};
}

