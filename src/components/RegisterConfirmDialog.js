import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import { Redirect } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import * as api from '../api';


/**
 * A modal dialog can only be closed by selecting one of the actions.
 */


export default class RegisterConfirmDialog extends Component {
    constructor(props) {
        super(props);
        this.state = { open: true,
                       studentid: "",
                       nickname: "",
                       redirect : false};
    }

    handleSubmit = () => {
        api.registerConfirm(this.state.studentid, this.state.nickname).then(ret => {
            console.log(ret);
            this.setState({ open: false, redirect: true});
            }
        )
    }



    render() {

        const {redirect} = this.state;

        const actions = [
            <FlatButton
                type="submit"
                label="Submit"
                primary={true}
                // onClick={this.handleSubmit}
            />,
        ];

        if (redirect) {
            return <Redirect to='/'/>;
        }

        return (




            <Dialog
                title="Please Input Additional Info"
                modal={true}
                open={this.state.open}
            >
                <form action="/" method="POST" onSubmit={(e) => { e.preventDefault(); alert('Submitted form!'); this.handleSubmit(); } }>
                    <TextField name="StudentID" hintText="Student ID"  onChange={event => this.setState({ studentid: event.target.value})} />
                    <TextField name="NickName"  hintText="Nickname" onChange={event => this.setState({ nickname: event.target.value})}/>
                    <div style={{ textAlign: 'Left', padding: 8, margin: '24px -24px -24px -24px' }}>
                        {actions}
                    </div>
                </form>
            </Dialog>
        );
    }
}