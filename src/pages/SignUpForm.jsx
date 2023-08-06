import React from "react";
export default SignUpForm;

function SignUpForm({ signUpForm, showLoginForm, hideSignUpForm }) {
  //   console.log("signUpForm: " + signUpForm);
  let FormCss = {
    display: "none",
  };

  if (signUpForm) {
    FormCss.display = "block";
  }
  return (
    <div id="signUpForm" className="modal" style={FormCss}>
      <form className="modal-content" action="">
        <div className="container">
          <div className="row pt-3 pb-3">
            <div className="col-6 text-center">
              <div
                className="login-tab"
                onClick={() => {
                  hideSignUpForm();
                  showLoginForm();
                }}
              >
                <button type="button" className="btn w-100">
                  <span className="login-text">登入</span>
                </button>
              </div>
            </div>

            <div className="col-6 text-center">
              <div className="register-tab">
                <button type="button" className="btn w-100">
                  <span className="register-text">註冊會員</span>
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <h1>
              <strong>Sign Up</strong>
            </h1>
            <div className="close-btn" onClick={hideSignUpForm}>
              <i className="fa fa-2x fa-window-close" aria-hidden="true"></i>
            </div>
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
              <label htmlFor="psw-repeat">
                <b>Repeat password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                required
              />
            </div>
          </div>
          <div className="button-section">
            <button type="submit" className="signUpbtn">
              立即註冊
            </button>
            <button
              type="button"
              className="cancelSignUpbtn"
              onClick={hideSignUpForm}
            >
              取消註冊
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
