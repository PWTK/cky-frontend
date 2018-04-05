import React from 'react';

// import InfoButton from 'material-ui/action/info';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import * as api from './api';

export default class AddCourseButton extends React.Component {
  state = {
    open: false,
    courseName: null,
    instructorName: null,
    capacity: null,
    startTime: null,
    endTime: null
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleSubmit = (courseName, instructorName, capacity, startTime, endTime) => {
      var fullStartTime = this.state.startTime.toString();
      var fullEndTime = this.state.endTime.toString();
      var fullSplitStartTime = fullStartTime.split(" ")[4];
      var fullSplitEndTime = fullEndTime.split(" ")[4];
      var getHourStart = fullSplitStartTime.split(":");
      var getHourEnd  = fullSplitEndTime.split(":");
      var classtime = getHourStart[0] + ":" + getHourStart[1] + " - " + getHourEnd[0] + ":" + getHourEnd[1];
      api.addCourseToTerm(classtime, this.state.courseName, this.state.instructorName, this.state.capacity);
      this.props.onAdd(true);
      this.setState({open: false, courseName: courseName, instructorName: instructorName, capacity: capacity, startTime: startTime, endTime: endTime});
      // console.log("HIHIHIHIxoxo");
      // console.log(true == 0);
      // console.log(this.state.courseName != null & this.state.instructorName != null & this.state.capacity != null & this.state.startTime != null & this.state.endTime != null);
      // console.log(this.state.courseName, this.state.instructorName, this.state.capacity, this.state.startTime, this.state.endTime);
      //
  }

  handleClose = (courseName, instructorName, capacity, startTime, endTime) => {
    this.setState({open: false, courseName: courseName, instructorName: instructorName, capacity: capacity, startTime: startTime, endTime: endTime});
    console.log("HIHIHIHIxoxo");
    // console.log(true == 0);
    console.log(this.state.courseName != null & this.state.instructorName != null & this.state.capacity != null & this.state.startTime != null & this.state.endTime != null);
    console.log(this.state.courseName, this.state.instructorName, this.state.capacity, this.state.startTime, this.state.endTime);
  };

  handleChangeTimePickerStart = (event, date) => {
    this.setState({startTime: date});
  };

  handleChangeTimePickerEnd = (event, date) => {
    this.setState({endTime: date});
  };

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
        disabled={!(this.state.courseName != null &
                    this.state.instructorName != null &
                    this.state.capacity != null &
                    this.state.startTime != null &
                    this.state.endTime != null
                   )}
      />,
    ];
    const actionsInfo = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    // console.log(courseName, 'xxxxx')
    return (
      <div>
        <RaisedButton label="Add Course" onClick={this.handleOpen} />
        <Dialog
          title="Create a new course"
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
        <TextField
          hintText="Com Pro I"
          floatingLabelText="Course Name"
          fullWidth={true}
          onChange = {(e) => this.setState({courseName: e.target.value})}
        />
        <TextField
          style={{"marginRight": "60px"}}
          hintText="Kanat Tangwongsan"
          floatingLabelText="Lecturer"
          onChange = {(e) => this.setState({instructorName: e.target.value})}
        />
        <TextField
          hintText="25"
          floatingLabelText="Class Capacity"
          onChange = {(e) => this.setState({capacity: e.target.value})}
        />
        <br/>
        <br/>
        <div className="inline">
        Start Time:
          <TimePicker
            style={{"marginRight": "60px"}}
            // style={{"width": "110px"}}
            format="ampm"
            hintText="10:00 am"
            value={this.state.startTime}
            onChange={this.handleChangeTimePickerStart}
          />
        </div>
        <div className="inline">
        End Time:
          <TimePicker
            format="ampm"
            hintText="11:50 pm"
            value={this.state.endTime}
            onChange={this.handleChangeTimePickerEnd}
          />
        </div>
        </Dialog>
      </div>
    )
  }
}
