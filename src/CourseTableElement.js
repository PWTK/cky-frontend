import React, {Component} from 'react';
// import InfoButton from 'material-ui/action/info';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import * as api from "./api";




export default class CourseTableElement extends Component {


  render(){
    const {name, lecturer, classTime, students, capacity, open, handleOpen, handleClose, onRemove} = this.props

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={handleClose}
      />
    ];
    // console.log(courseName, 'xxxxx')
    return (
      <tr>
        <td>{name}</td>
        <td>{lecturer}</td>
        <td>{classTime}</td>
        <td>
          <button style={{cursor: "pointer"}} onClick={() => handleOpen(name)}><b><i>{students.length}</i></b> </button>
          {/* {console.log("Start: ")}
          {console.log(students: students)} */}
          {/* <FlatButton label="More" onClick={handleOpen}/> */}
          <Dialog
            title="Students registering for the course"
            actions={actions}
            modal={false}
            open={open}
            autoScrollBodyContent={true}
            onRequestClose={handleClose}
          >
            {students.map(stu => <p key={stu}>{stu}</p>)}
          </Dialog>
          /{capacity}
          {/* </Dialog show={showDialog}> */}
        </td>
      </tr>
    )
  }
}
