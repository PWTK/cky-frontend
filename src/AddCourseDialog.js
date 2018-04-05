import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';

 function AddCourseDialog(handleClose) {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={this.handleClose}
      // onClick={this.handleClose(null, null, null, null, null)}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      onClick={handleClose}
      // disabled={true}
      // onClick={this.handleClose(this.props.courseName, this.props.instructorName, this.props.capacity, this.props.startTime, this.props.endTime)}
    />,
  ];

  return (
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
  )
}
export default AddCourseDialog;