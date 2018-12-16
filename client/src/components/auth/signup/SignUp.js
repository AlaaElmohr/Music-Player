import React , {Component} from 'react';
import BackgroundComponent from '../../built-in-components/backgroundComponent/BackgroundComponent';
import FormComponent from '../../built-in-components/formComponent/FormComponent';
import { Link } from 'react-router-dom';
import '../auth.scss'
class SignUpComponent extends Component{
    render(){
        return(
            <div className="row fullscreen">
             <div className="col-md-3 dark-bg right-side">
              <div className="logo">
                <img src = {require("../../../assets/images/logo.png")} />
              </div>
              <div className="login-form">
               <FormComponent type="signup" />
              </div>
              <div className="login-footer">
                <h6>Do you have an account?<Link className="link" to="/login">Start Free Trial</Link></h6>
              </div>
              </div>
             <div className="col-md-9 left-side">
             <BackgroundComponent title="New FKA Twig Album is now available" span="what's new on NG?" height="100%" image="signIn.jpg" profile="false" />

             </div>
            </div>
        );
    }
}
export default SignUpComponent;