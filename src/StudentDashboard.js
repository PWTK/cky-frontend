import React from 'react';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import Paper from 'material-ui/Paper';
// import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import CardView from './CardView';
import * as api from "./api";

const catagory = {
    // position: absolute,
    // top: -34,
    // left: 0,
    width: 90,
    // "margin-left": 1110,
    background: "#7aa438",
    padding: "10px 15px",
    color: "#FFFFFF",
    "font-size": 14,
    "font-weight": 600,
    "box-shadow": "0 3px 11px 0 rgba(0, 0, 0, 0.2), 0 3px 11px 0 rgba(0, 0, 0, 0.19)"
    // "text-transform": uppercase,
}

export default class StudentDashboard extends React.Component {

    constructor(props) {


        super(props);
        // this.createElement = this.createElement.bind(this)
        this.state = {
            value: 1,
            myId: 0,
            combinedTable: [],
            myCourses: [
                // {
                //   courseName: "Computer Programming 0"
                // },
                // {
                //   courseName: "Computer Programming I"
                // },
                // {
                //   courseName: "Computer Programming II"
                //   // }
                //   {
                //     courseName: "Computer Programming 0",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   },
                //   {
                //     courseName: "Computer Programming I",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   },
                //   {
                //     courseName: "Computer Programming II",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   },
                //   {
                //     courseName: "Computer Programming VII",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   }
            ],
            allCourses: [
                // {
                //     "classTime":"10:00-12:00",
                //     "name":"OOC",
                //     "lecturer":"Kanat",
                //     "students":["Jar Han"]
                // },{
                //     "classTime":"12:00-2:00",
                //     "name":"OPL",
                //     "lecturer":"Boi",
                //     "students":["Jar Han"]
                // }, {
                //     "classTime":"9:00-12:00",
                //     "name":"KanatClass",
                //     "lecturer":"KanatBoi",
                //     "students":[
                //         "Sanchit Chawla",
                //         "Jar Han"]}

                // {
                //     classTime:"10:00-12:00",
                //     name:"OOC",
                //     lecturer:"Kanat",
                //     students:["Jar Han"]
                // },{
                //     classTime:"12:00-2:00",
                //     name:"OPL",
                //     lecturer:"Boi",
                //     students:["Jar Han"]
                // }, {
                //     classTime:"9:00-12:00",
                //     name:"KanatClass",
                //     lecturer:"KanatBoi",
                //     students:[
                //         "Sanchit Chawla",
                //         "Jar Han"]}


                //   {
                //     courseName: "Computer Programming 0",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   },
                //   {
                //     courseName: "Computer Programming I",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   },
                //   {
                //     courseName: "Computer Programming II",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   },
                //   {
                //     courseName: "Computer Programming III",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   },
                //   {
                //     courseName: "Computer Programming IV",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   },
                //   {
                //     courseName: "Computer Programming V",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   },
                //   {
                //     courseName: "Computer Programming VI",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   },
                //   {
                //     courseName: "Computer Programming VII",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   },
                //   {
                //     courseName: "Computer Programming VIII",
                //     instructorName: "Aj Kanat",
                //     time: "10 am - 11.50 am",
                //     students: "Pam, Ly, Sunny, Taro"
                //   }
            ]
        };

    }

    handleChange = (event, index, value) => this.setState({value});

    onAdd = (props) => {
        api.addStudentToCourse(this.state.myId, props.id).then(this.fetchData)
    }

    onRemove = (props) => {
        api.removeStudentFromCourse(this.state.myId, props.id).then(this.fetchData)
    }

    fetchData = () => {
        api.whoami().then(ret => {
            this.setState({myId: ret.id})
        })
            .then(() => {
                return api.getMyCourse(this.state.myId).then(response => {
                    this.setState({myCourses: response.courses})
                })
            })
            .then(() => {
                return api.getAllCourse().then(ret => {
                    this.setState({allCourses: ret.courses});
                })
            })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {

        const {allCourses, myCourses} = this.state

        return (
            <div>
                <section>
                    <h1>Courses</h1>
                    <br/>
                    {myCourses.map((each) => {
                        return <CardView courseName={each.name} instructorName={each.lecturer} time={each.classTime}
                                         students={each.students}
                                         added={true} id={each.id} onRemove={this.onRemove.bind(this)}/>
                    })}
                    {allCourses.filter(course => !myCourses.map(each => each.name).includes(course.name)).map((each) => {
                        return <CardView courseName={each.name} instructorName={each.lecturer} time={each.classTime}
                                         students={each.students}
                                         id={each.id} onAdd={this.onAdd.bind(this)}/>
                    })}
                </section>
            </div>
        );
    }
}
