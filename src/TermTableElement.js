import React, {Component} from 'react';
// import InfoButton from 'material-ui/action/info';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import * as api from "./api";




export default class TermTableElement extends Component {




    render(){
        const {id, courses, open, handleOpen, handleClose} = this.props

        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={handleClose}
            />
        ];

        return (
            <tr>
                <td>{id}</td>
                <td>
                    <button style={{cursor: "pointer"}} onClick={() => handleOpen(id)}><b><i>{courses.length}</i></b> </button>
                    {/* {console.log("Start: ")}
          {console.log(students: students)} */}
                    {/* <FlatButton label="More" onClick={handleOpen}/> */}
                    <Dialog
                        title="Courses"
                        actions={actions}
                        modal={false}
                        open={open}
                        autoScrollBodyContent={true}
                        onRequestClose={handleClose}
                    >
                        {courses.map(cour => <p key={cour}>{cour}</p>)}
                    </Dialog>
                    {/* </Dialog show={showDialog}> */}
                </td>
            </tr>
        )
    }
}
