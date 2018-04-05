import axios from './AxiosConfiguration'
import type, {AxiosPromise} from 'axios'




///Admin

export function addCourseToTerm(classTime, name, lecturer, capacity): AxiosPromise<any> {
    return axios.post('/admin/addcourse' , {
        classTime:classTime,
        name:name,
        lecturer:lecturer,
        capacity:capacity
    })
        .then(function (response) {
            console.log(response);
            // return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}

export function disapproveUser(userid): AxiosPromise<any> {
    return axios.post('/admin/disapprove?id=' + userid)
        .then(function (response) {
            console.log(response);
            // return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}

export function approveAdmin(userid): AxiosPromise<any> {
    return axios.post('/admin/approveadmin?id=' + userid)
        .then(function (response) {
            console.log(response);
            // return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}

export function approveStudent(userid): AxiosPromise<any> {
    return axios.post('/admin/approveuser?id=' + userid)
        .then(function (response) {
            console.log(response);
            // return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}


export function removeCourse(name): AxiosPromise<any> {
    return axios.post('/admin/removecourse?name=' +name)
        .then(function (response) {
            // console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}



export function addEditDeadline(deadline): AxiosPromise<any> {
    return axios.post('/admin/addeditdeadline?deadline=' +deadline)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });
}



export function addTerm(deadline): AxiosPromise<any> {
    return axios.post('/admin/addterm?deadline=' + deadline)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
}

export function getAllTerm(): AxiosPromise<any> {
    return axios.get('/term/all')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        })
}




//Course


export function getAllCourse(): AxiosPromise<any>{

    return axios.get('/course/all')
        .then(function (response) {
            // console.log(response);
            // console.log("response here");
            return response.data;
        })
        .catch(function (error) {
            // console.log("error status");
            console.error(error);
            //return error;
        });
}


export function editLecturer(id, lecturer): AxiosPromise<any> {
    return axios.post('/course/editlecturer')
        .then(function (response) {
            // console.log(response);
            return response;
        })
        .catch(function (error) {
            console.error(error);
        });
}

export function editCapacity(id, capacity): AxiosPromise<any> {
    return axios.post('/course/editcapacity')
        .then(function (response) {
            // console.log(response);
            return response;
        })
        .catch(function (error) {
            console.error(error);
        });
}

export function editClassTime(id, classtime): AxiosPromise<any> {
    return axios.post('/course/editclasstime')
        .then(function (response) {
            // console.log(response);
            return response;
        })
        .catch(function (error) {
            console.error(error);
        });
}

export function editCourseName(id, name): AxiosPromise<any> {
    return axios.post('/course/editname')
        .then(function (response) {
            // console.log(response);
            return response;
        })
        .catch(function (error) {
            console.error(error);
        });
}

export function getMyCourse(userId): AxiosPromise<any> {
    return axios.get('/course/mycourses?userId=' + userId)
        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}

//Term Controller
export function getTermId(): AxiosPromise<any> {
    return axios.get('/term/id')
        .then(function (response) {
            // console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}

export function getDeadline(termId): AxiosPromise<any> {
    return axios.post('/term/getdeadline?termId=' + termId)
        .then(function (response) {
            // console.log(response);
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        });
}


//User Controller


export function whoami(): AxiosPromise<any> {
    return axios.get('/user/whoami')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.error(error);
        })
}


export function login(accessToken): AxiosPromise<any>{
    axios.defaults.headers.common['Authorization'] = "Bearer " + accessToken;

    return axios.get('/user/whoami')
        .then(function (response) {
            // console.log(response);
            // console.log("response here");
            return response.data;
        })
        .catch(function (error) {
            // console.log(error.response.status);
            return error.response.status;
        });
}

export function registerConfirm(studentid, nickname): AxiosPromise<any> {
    return axios.post('/user/confirm?userId=' +studentid  + "&nickName=" + nickname)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}

export function getAllUser(): AxiosPromise<any> {
    return axios.get('/user/all')
        .then(function (response) {
            console.log(response);
            // console.log("response here");
            return response.data;
        })
        .catch(function (error) {
            // console.log(error.response.status);
            console.error(error);
        });
}


export function removeStudentFromCourse(userId, courseId): AxiosPromise<any> {
    return axios.post('/user/removecourse?userId=' +userId + "&courseId=" + courseId)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}

export function addStudentToCourse(userId, courseId): AxiosPromise<any> {
    return axios.post('/user/addcourse?userId=' +userId + "&courseId=" + courseId)
        .then(function (response) {
            // console.log(response);
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
}