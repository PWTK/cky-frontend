import React from 'react';

// import InfoButton from 'material-ui/action/info';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import * as api from './api';

export default class AddEditDeadline extends React.Component {
    state = {
        open: false,
        deadLine: null,
        deadLineSent: null,
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleSubmit = () => {
        api.addEditDeadline(this.state.deadLineSent);
        this.props.onAdd(true);
        this.handleClose();
    }

    handleClose = () => {
        this.setState({open: false, deadLine: null});
    };

    handleTimePicker = (event, date) => {
        let d = date.getDate()
        let tmp_d = (d<10 ? "0"+d : d)
        let m = date.getMonth() + 1
        let tmp_m = (m<10 ? "0"+m : m)
        let tmp_date = tmp_d + "-" + tmp_m + "-" + date.getFullYear()%100
        this.setState({deadLine: date, deadLineSent: tmp_date})
    }

    formatDate = (date) => {
        let d = date.getDate()
        let tmp_d = (d<10 ? "0"+d : d)
        let m = date.getMonth() + 1
        let tmp_m = (m<10 ? "0"+m : m)
        return tmp_d + "-" + tmp_m + "-" + date.getFullYear()%100;
    }

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
                disabled={!(this.state.deadLine != null)}
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
                <RaisedButton label="Edit Deadline" onClick={this.handleOpen} />
                <Dialog
                    title="Edit Deadline"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    autoScrollBodyContent={true}
                >
                    {/*<DatePicker*/}
                    {/*hintText="fr locale"*/}
                    {/*DateTimeFormat={DateTimeFormat}*/}
                    {/*okLabel="OK"*/}
                    {/*cancelLabel="Annuler"*/}
                    {/*/>*/}
                    {/*<Field*/}
                    {/*name="dateFrom"*/}
                    {/*component={DatePicker}*/}
                    {/*hintText="Deadline date"*/}
                    {/*// autoOk*/}
                    {/*formatDate={(date) => date.format('DD-MM-YY')}*/}
                    {/*/>*/}
                    <DatePicker
                        hintText="new deadline date"
                        mode="landscape"
                        value = {this.state.deadLine}
                        onChange = {this.handleTimePicker}
                    />
                    {/*<DatePicker hintText="deadline date" mode="landscape" />*/}
                    {/*<TextField*/}
                    {/*hintText="dd-mm-yy"*/}
                    {/*floatingLabelText="Deadline"*/}
                    {/*fullWidth={true}*/}
                    {/*onChange = {(e) => this.setState({deadLine: e.target.value})}*/}
                    {/*/>*/}


                </Dialog>
            </div>
        )
    }
}
