import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {grey600} from 'material-ui/styles/colors';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";
import People from 'material-ui/svg-icons/social/people';
import Schedule from 'material-ui/svg-icons/editor/insert-invitation'

// import Students from './StudentManagement'

export default class AdminHome extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {/* <span class="title">Students</span> */}
        {/* <div class="basicBox">
          <People/>Students
          <svg width="215" height="250" viewBox="0 0 215 250" xmlns="http://www.w3.org/2000/svg">
            <rect x='0' y='0' fill='none' width='215' height='250'/>
          </svg>
        </div>

        <div class="basicBox">
          <Schedule/>Courses
          <svg width="215" height="250" viewBox="0 0 215 250" xmlns="http://www.w3.org/2000/svg">
            <rect x='0' y='0' fill='none' width='215' height='250'/>
          </svg>
        </div> */}

        <div class="container">
          <div class="box"
            onClick={() => this.props.history.push('/admin/manage-students')}
            >
            <span class="icon-cont">
              <img style={{"width": 150, "margin-top": 55, "opacity": 0.5}} src="https://image.ibb.co/f33L7x/avatar.png" alt="student icon" />
              {/* <i class="fa fa-rocket"></i> */}
            </span>

            <h3>Users</h3>
          </div>

          <div class="box"
            onClick={() => this.props.history.push('/admin/manage-courses')}
          >
            <span class="icon-cont">
              <img style={{"width": 150, "margin-top": 55, "opacity": 0.5}} src="https://image.ibb.co/eUCx4c/libro_1.png" alt="course icon" />
              {/* <i class="fa fa-edit"></i> */}
            </span>
            <h3>Courses</h3>
          </div>
        </div>
        {/* <Route path="/admin/manage-student" component={Students}/> */}
      </div>
    );
  }
}
