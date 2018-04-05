import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
    Redirect,
  withRouter,
  Switch
} from "react-router-dom";
import { AuthProvider, AuthRoute } from 'react-router-auth-provider'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Exit from 'material-ui/svg-icons/action/exit-to-app';
import './styles/App.css';
import Login from './Login';
import Admin from './AdminHome';
import ManageStudents from './StudentManagement';
import ManageCourses from './CourseManagement';
import StudentDashboard from './StudentDashboard';
import ManageTerm from "./AllTerm"
import RegisterConfirmDialog from './components/RegisterConfirmDialog'
import axios from "./AxiosConfiguration";
// import IconButton from 'material-ui/IconButton';
// import Logout from 'material-ui/svg-icons/action/exit-to-app'
////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time


class App extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
        addinfo : false,
      redirect: false
    }
  }


  onLogin = (state) => {
    this.setState({authenticated: state})
  }


  render() {
    const {authenticated} = this.state;

      return (
      <MuiThemeProvider>
      <Router>
        <div>
           <AppBar
             showMenuIconButton={false}
            // iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconElementRight={
              <IconButton tooltip="Logout">

                <Exit color={"black"}/>
                {/* <img src="https://image.ibb.co/gORmzn/exit_2.png" alt="logout icon"/> */}
              </IconButton>
            }
            style={{"background-color": "#ffffff00", "box-shadow": "none"}}
          />
          {/* <IconButton tooltip="Logout" style={{width: 50, position: "absolute", margin: 15, opacity: 0.5}}>
            <Logout style={{height: 45, width: 45}}/>
          </IconButton> */}
          {/* <span class="icon-cont">
            <img tooltip="logout" src="https://image.ibb.co/by1j0H/exit_2.png" alt="logout icon" style={{width: 50, position: "absolute", margin: 15, opacity: 0.5}}/>
          </span> */}
          <Switch>
              <Route path="/admin/all-terms" component={ManageTerm}/>
            <Route path="/admin/manage-students" component={ManageStudents}/>
            <Route path="/admin/manage-courses" component={ManageCourses}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/all-courses" component={StudentDashboard}/>
              <Route path="/login" render={() => (<Login onLogin={this.onLogin.bind(this)}/>)} />
              <Route exact path="/" render={() => (<Redirect to="/login" />)} />
            {/* <Route path="/admin" component={Admin}/> */}

            {/* <Route path="/admin" component={Admin}/> */}
          </Switch>
          {/* <span class="icon-cont"> */}
          {/* <div>
            <img tooltip="logout" src="https://image.ibb.co/by1j0H/exit_2.png" alt="logout icon" style={{width: 50, position: "absolute", margin: 15, opacity: 0.5}}/>
            <br/>
            <br/>
            <br/>
            <span>Logout</span>
          </div> */}
          {/* <p><span>Some Text</span></p> */}
        </div>
      </Router>
      </MuiThemeProvider>
    )
  }
}


export default App;




