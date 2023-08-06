import React from "react";
import { useState } from "react";

export default LoginForm;

function LoginForm({ loginForm, showSignUpForm, hideLoginForm }) {
  const [rememberMe, SetrememberMe] = useState(false);

  function toggleRememberMe() {
    SetrememberMe(!rememberMe);
  }

  let FormCss = {
    display: "none",
  };

  if (loginForm) {
    FormCss.display = "block";
  }

  return (
    <div id="loginForm" className="modal" style={FormCss}>
      <form className="modal-content" action="">
        <div className="container">
          <div className="row pt-3 pb-3">
            <div className="col-6 text-center">
              <div className="login-tab">
                <button type="button" className="btn w-100">
                  <span className="login-text">登入</span>
                </button>
              </div>
            </div>

            <div className="col-6 text-center">
              <div
                className="register-tab"
                onClick={() => {
                  hideLoginForm();
                  showSignUpForm();
                }}
              >
                <button type="button" className="btn w-100">
                  <span className="register-text">註冊會員</span>
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <h1>
              <strong>Login</strong>
            </h1>
            <i
              className="fa fa-2x fa-window-close"
              aria-hidden="true"
              onClick={hideLoginForm}
            ></i>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
            </div>

            <div className="col-12">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={toggleRememberMe}
                  name="remember"
                />
                Remember me
              </label>
            </div>
          </div>
          <div className="button-section">
            <button type="submit" className="loginbtn">
              登入
            </button>
            <button
              type="button"
              className="cancelLoginbtn"
              onClick={hideLoginForm}
            >
              取消登入
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
