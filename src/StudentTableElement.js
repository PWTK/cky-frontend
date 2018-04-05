import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Check from 'material-ui/svg-icons/navigation/check'
import Close from 'material-ui/svg-icons/navigation/close'

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

export default function CourseTableElement({firstName, lastName, nickname, id, status, onDisapprove, onApproveAdmin, onApproveStudent}) {
  if (status === "ROLE_NOT_APPROVED") {
    return (
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{nickname}</td>
        <td>{id}</td>
        <td>Not Approved</td>
        <td>
          <IconButton tooltip="Approve as Admin" onClick = {() => onApproveAdmin(id)}>
            <Check color={"white"}/>
          </IconButton>
          <IconButton tooltip="Approve as Student" onClick = {() => onApproveStudent(id)}>
            <Check color={"white"}/>
          </IconButton>
            <IconButton tooltip="Disapprove" onClick = {() => onDisapprove(id)} >
                <Close color={"white"}/>
            </IconButton>


          {/* <RaisedButton
            label="Approve"
            labelPosition="before"
            // primary={true}
            style={styles.button}
          />
          <RaisedButton
            label="Cancel"
            // secondary={true}
            style={styles.button}
          /> */}
        </td>
      </tr>
    )
  }
  else {
    return (
      <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{nickname}</td>
        <td>{id}</td>
        <td>{status}</td>
        <td>
            <IconButton tooltip="Remove"  onClick = {() => onDisapprove(id)} >
                <Close color={"white"}/>
            </IconButton>
          {/*<RaisedButton*/}
            {/*label="Remove"*/}
            {/*// secondary={true}*/}
            {/*style={styles.button}/>*/}
        </td>
      </tr>
    )
  }
}
