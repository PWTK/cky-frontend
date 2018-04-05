import React, {Component} from 'react'
import { Redirect } from 'react-router';
import { FacebookLogin } from 'react-facebook-login-component';
import RegisterConfirmDialog from './components/RegisterConfirmDialog'
import * as api from './api';
import NotApprovedDialog from './components/NotApprovedDialog';



class Login extends Component{

    constructor (props, context) {
    super(props, context);
    this.state = ({
        redirect : false,
        addinfo : false,
        admin : false,
        notapp: false
    });
  }

  responseFacebook = (response) => {
      api.login(response.accessToken).then(ret => {
          //
          // if (ret == 500){
          //     this.setState({addinfo: true});
          // }
          if (ret !== 401){
              if(ret.role == "ROLE_ADMIN"){
                  this.setState({admin: true })
              }
              else if(ret.role == "ROLE_NOT_APPROVED") {
                  this.setState({notapp: true})
              }
              else  {
                  this.setState({redirect: true}, this.props.onLogin(true))
                  console.log(ret);
              }

          } else {
              this.setState({addinfo: true});
          }
      })

  }


  render () {
        const { redirect, addinfo, admin, notapp } = this.state;
      if (notapp){
          return <NotApprovedDialog/>;

      }

      if (addinfo) {
          return <RegisterConfirmDialog/>;
      }

      if (admin){
          return <Redirect to ='/admin'/>;
      }

      if (redirect) {
          return <Redirect to='/all-courses'/>;
      }
    return (
      <div>
      <div className="logo">
        {/* <img src="https://cdn0.iconfinder.com/data/icons/education-flat-7/128/20_Graduation-256.png" alt="login background" /> */}
        <img src="https://image.ibb.co/eeKDen/student_hat.png" alt="login background" />
        <h2 style={{"text-align": "-webkit-center", "fontSize": "500%", color: "#f6f7f9", margin: 0, "text-shadow": "4px 4px #00000066"}}>CKY</h2>
        {/* <h1>HI</h1> */}
        {/* <img src="https://image.ibb.co/eqQfQS/picturetopeople_org_5f893c6b8bf25211197d954ff1ef3a384a6dabe57a41764ff4.png" alt="login background" /> */}
        {/* <span>HI</span> */}
        {/* <img src="https://image.ibb.co/dWTJqx/cky_logo.png" alt="login background" /> */}
      </div>
      {/* <i class="fab fa-facebook-f"></i> */}
      {/* <a href="#" className="twitter">Twitter</a>
      <FontAwesomeIcon icon="coffee"/> */}

      <FacebookLogin socialId="1958344057761084"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="login-with-fb"
                       buttonText="Login With Facebook"
                       auth_type="eauthenticate"

      />


      </div>
    );
  }

}


export default Login;
