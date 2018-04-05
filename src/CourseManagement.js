import React from 'react';
import { Redirect } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import ContentAdd from 'material-ui/svg-icons/content/add-box';
import IconButton from 'material-ui/IconButton';
import Moment from 'moment';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import AddEditDeadline from './AddEditDeadline';
import AddTermButton from './AddTermButton'
import AddCourseDialog from './AddCourseDialog'
import CourseTableElement from './CourseTableElement'
import AddCourseButton from './AddCourseButton'
import * as api from './api';

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
                <td>Course</td>
                <td>Instructor</td>
                <td>Time</td>
                <td>Students</td>
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
          deadLine: null,
          tab : []
      }
  };


    onAdd(props) {
        if (props) {
            this.fetchData()
        }
    }

    fetchData = () => {
        api.getAllCourse().then(ret => {
            this.setState({tab: ret.courses});
        })
        api.getTermId().then(ret => {
            this.setState({termId: ret})
        })
            .then(() => {
                return api.getDeadline(this.state.termId).then(ret => {
                    this.setState({deadLine: ret})
                })
        })
    }
    componentDidMount(){
                this.fetchData()
    }


  handleOpenInfo = (courseName) => {
    this.setState({openInfo: courseName});
  };

  handleCloseInfo = () => {
    this.setState({openInfo: null});
  };

  render() {
      const {tab, termId, deadLine} = this.state;
    return (
      <div>
        <section>
          <Title>Trimester {termId}

          </Title>
            {/*<a> All </a>*/}
            <AlignRight>
                <FlatButton label="All Terms" onClick={() => this.props.history.push('/admin/all-terms')}/>
            </AlignRight>
            <AlignRight>
                <AddTermButton onAdd={this.onAdd.bind(this)}/>
                {/*<AddCourseButton onAdd={this.onAdd.bind(this)}/>*/}
            </AlignRight>
          <AlignRight>
            <AddCourseButton onAdd={this.onAdd.bind(this)}/>
          </AlignRight>
            <AlignRight>
                <AddEditDeadline onAdd={this.onAdd.bind(this)}/>
            </AlignRight>
          <Table>
            {tab.map(each =>
              <CourseTableElement
                {...each}
                key={each.name}
                open={this.state.openInfo == each.name}
                handleOpen={this.handleOpenInfo}
                handleClose={this.handleCloseInfo}
              />)}
            {/* <CourseTableElement courseName="hah3" instructorName="hu" startTime="10.00" endTime="12.00" students={["Pam", "LY", "JM"]} capacity={15}/> */}
            {/* <CourseTableElement courseName="haha4" instructorName="hu" startTime="10.00" endTime="12.00" students={["Pam", "LY", "JM"]} capacity={11}/> */}
            {/* <CourseTableElement courseName="haha3" instructorName="hu" startTime="10.00" endTime="12.00" students={["Pam", "LY", "JM"]} capacity={30} handleOpen={this.handleOpenInfo.bind(this, this.state.openInfo)} handleClose={this.handleCloseInfo.bind(this, this.state.openInfo)} actions={actionsInfo}/> */}
          </Table>
        </section>
          <div className="made-with-love">
              Deadline term is {Moment({deadLine}).format('d MMM')} <i>♥</i>
          </div>
      </div>
    );
  }
}
