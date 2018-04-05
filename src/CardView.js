import React from 'react';
import './styles/App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Axios from './AxiosConfiguration'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const stylePaper = {
  height: 118,
  width: 364,
  // width: 1200,
  margin: "30px 20px 10px 60px",
  // textAlign: 'center',
  display: 'inline-block',
  backgroundColor: "#ffffff00",
};

export default function DashboardCard({courseName, instructorName, time, students, added, onAdd, onRemove, id}) {

  if (added) {
    return (
      <Paper style={stylePaper} zDepth={1} >
        <Card>
          <CardHeader
            title={courseName}
            subtitle={instructorName}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <div class="containerflag cont-2">Added</div>
          <CardText expandable={true}>
            <Divider/>
            <h3/>
            <div><b>Time:</b> {time}</div>
            <br/>
            <div><b>Students:</b> {students}</div>
          </CardText>
          <CardActions>
            <FlatButton backgroundColor="#f2f2f2" label="Remove" onClick={()=>onRemove({courseName, instructorName, time, students, added, id})} />
          </CardActions>
        </Card>
      </Paper>
    )
  }
  else {
    return (
      <Paper style={stylePaper} zDepth={1} >
        <Card>
          <CardHeader
            title={courseName}
            subtitle={instructorName}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <Divider/>
            <h3/>
            <div><b>Time:</b> {time}</div>
            <br/>
            <div><b>Students:</b> {students}</div>
          </CardText>
          <CardActions>
            <FlatButton backgroundColor="#f2f2f2" label="Add" onClick={()=>onAdd({courseName, instructorName, time, students, added, id, onAdd, onRemove})}/>
          </CardActions>
        </Card>
      </Paper>
    )
  }
}
