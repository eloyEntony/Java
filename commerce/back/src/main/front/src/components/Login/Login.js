import React, { Component } from "react";
import "../Login/Login.css";
import { Redirect, withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import history from "../../history";

import Notification from "../Notification/Notofication";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { isEmail } from "validator";

import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);

    this.state = {
      usernameOrEmail: "",
      password: "",
      loading: false,
    };
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.usernameOrEmail, this.state.password))
        .then(() => {
          history.push("/home");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false,
          });
        });
    } else {
      this.setState({ loading: false });
    }
  }

  onChangeInput = (e) => {
    var target = e.target;
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="maincontainer">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6 d-none d-md-flex bg-image"></div>

            <div className="col-md-6 bg-light">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <h3 className="display-4">Login</h3>
                      <Form
                        onSubmit={this.handleLogin}
                        ref={(c) => {
                          this.form = c;
                        }}
                      >
                        <div className="mb-3">
                          <Input
                            id="inputEmail"
                            type="email"
                            placeholder="Email address"
                            required=""
                            autofocus=""
                            name="usernameOrEmail"
                            value={this.state.usernameOrEmail}
                            onChange={this.onChangeInput}
                            validations={[required]}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                          />
                        </div>
                        <div className="mb-3">
                          <Input
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            required=""
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangeInput}
                            validations={[required]}
                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          />
                        </div>
                        <div className="d-grid gap-2 mt-2">
                          <button
                            type="submit"
                            disabled={this.state.loading}
                            className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          >
                            {this.state.loading ? (
                              <span className="spinner-border spinner-border-sm"></span>
                            ) : (
                              <span>Login</span>
                            )}
                          </button>
                        </div>
                        {message && (
                          <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                              {message}
                            </div>
                          </div>
                        )}
                        <CheckButton
                          style={{ display: "none" }}
                          ref={(c) => {
                            this.checkBtn = c;
                          }}
                        />
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Login);
