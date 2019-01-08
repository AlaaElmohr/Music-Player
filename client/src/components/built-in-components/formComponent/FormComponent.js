import React, {Component} from 'react';
import { Field, reduxForm } from "redux-form";
import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { signupWithEmail,loginWithEmail } from "../../../actions";
import './FormComponent.scss';
class FormComponent extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
          <div className="form-group">
            <input className="form-control" type={field.type} placeholder={field.placeholder} {...field.input} />
            <div className={className}>
              {touched ? error : ""}
            </div>
          </div>
        );
      }
    renderName = ()=>{
        if(this.props.type == 'signup'){
            return(
                <Field
                name="name"
                type="text"
                placeholder="enter your name"
                component={this.renderField}
              />
            )
        }
    }
    onSubmit=(values)=>{
        if(this.props.type == 'signup'){
          console.log("eeeeeeeeeeeeeeeeeeeeeeh")
            this.props.signupWithEmail(values,this.props.history)
        }
        if(this.props.type == 'login'){
          console.log("oooooooooh")

            this.props.loginWithEmail(values,this.props.history) 
        }
       
    }
    render(){
        const { handleSubmit } = this.props;

        return(
            <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                {this.renderName()}

              <Field
                name="email"
                type="email"
                placeholder="enter your email"
                component={this.renderField}
              />
              <Field
                name="password"
                type="password"
                placeholder="enter your password"
                component={this.renderField}
              /> 
                <button  type="submit" className="btn btn-success btn-block m-t-10">{this.props.type}</button>
            </form>
            <a href="/auth/google"><button  className="btn btn-primary btn-block m-t-5">log in with google</button></a>

            </div>
        )
    }
}
function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Enter your email";
    }
    if (!values.name) {
      errors.name = "Enter your name";
    }
    if (!values.password) {
      errors.password = "Enter your password";
    }
    return errors;
  }
  const mapDispatchToProps = {
    signupWithEmail,
    loginWithEmail,
  };
export default reduxForm({
    form: "SignUpForm",
    validate
  })(connect(null,mapDispatchToProps)(withRouter(FormComponent)));