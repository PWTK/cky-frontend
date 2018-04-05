import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import { Redirect } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class NotApprovedDialog extends Component {
    state = {
        open: true,
        redirect: false
    };

    handleClose = () => {
        this.setState({open: false});
        this.setState({redirect: true})
    };



    render() {
        const {open,redirect} = this.state;
        if (redirect){
            return <Redirect to='/'/>;
        }

        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="YOU ARE NOT APPROVED YET"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    Please contact administrator for further information.
                </Dialog>
            </div>
        );
    }
}