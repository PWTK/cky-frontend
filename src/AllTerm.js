import React from 'react';
import { Redirect } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import ContentAdd from 'material-ui/svg-icons/content/add-box';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import AddTermButton from './AddTermButton'
import AddCourseButton from './AddCourseButton'
import * as api from './api';
import TermTableElement from "./TermTableElement";

const style = {
    // button: {
    margin: 12,
    // },
    // exampleImageInput: {
    //   cursor: 'pointer',
    //   position: 'absolute',
    //   top: 0,
    //   bottom: 0,
    //   right: 0,
    //   left: 0,
    //   width: '100%',
    //   opacity: 0,
    // },
};

const addStyle = {
    marginRight: 20,
};

function TableHeader(){
    return(<div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
            <tr>
                <td>Term</td>
                <td>Course</td>
            </tr>
            </thead>
        </table>
    </div>)
}

function AlignRight(props){
    return <div style={{textAlign: "right", whiteSpace: "nowrap", marginBottom: "1%", display: "inline-block", marginRight: "1%"}} {...props}/>
}



function Title(props){
    return <h1 style={{display:"inline"}} {...props}/>
}

function Table({children, ...props}){
    return(
        <div>
            <TableHeader/>
            <div className="tbl-content" {...props}>
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                    {children}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default class DialogExampleModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            termId: null,
            openInfo: null,
            tab : []
        }
    };

    onAdd (props){
        if(props){
            this.componentDidMount();
        }
    }

    componentDidMount(){
        api.getAllTerm().then(ret => {
            // console.log(ret.courses);
            this.setState({tab: ret.terms});
        })
    }

    handleOpenInfo = (courseName) => {
        this.setState({openInfo: courseName});
    };

    handleCloseInfo = () => {
        this.setState({openInfo: null});
    };

    render() {
        const {tab} = this.state;
        return (
            <div>
                <section>
                    <Title>All Terms</Title>
                    <AlignRight>
                        <FlatButton label="Current Term" onClick={() => this.props.history.push('/admin/manage-courses')}/>
                    </AlignRight>
                    <Table>
                        {tab.map(each =>
                            <TermTableElement
                                {...each}
                                key={each.id}
                                open={this.state.openInfo == each.id}
                                handleOpen={this.handleOpenInfo}
                                handleClose={this.handleCloseInfo}
                            />)
                        }
                        </Table>
                </section>
            </div>
        );
    }
}
