import "../../stylesheet/login_signup_form.css";

import React, { useState } from "react";
import "../../stylesheet/Home/joinUs.css";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

export default JoinUs;

function JoinUs() {
  const [signUpForm, setsignUpForm] = useState(false);
  const [loginForm, setLoginForm] = useState(false);

  function showSignUpForm() {
    setsignUpForm(true);
  }
  function hideSignUpForm() {
    setsignUpForm(false);
  }

  function showLoginForm() {
    setLoginForm(true);
  }

  function hideLoginForm() {
    setLoginForm(false);
  }

  return (
    <section className="join-us-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 className="join-us-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores accusamus nemo libero animi repellendus mollitia,
              possimus eius sapiente temporibus numquam modi enim tenetur odio
              maiores fugiat perspiciatis eligendi vitae illo.
            </h2>
          </div>
          <div className="col-md-4">
            <div className="join-us-interact">
              <button
                type="button"
                className="btn btn-outline-info join-us-btn"
                onClick={showSignUpForm}
              >
                Join us
              </button>
            </div>
          </div>
        </div>
      </div>
      <SignUpForm
        signUpForm={signUpForm}
        showLoginForm={showLoginForm}
        hideSignUpForm={hideSignUpForm}
      />
      <LoginForm
        loginForm={loginForm}
        showSignUpForm={showSignUpForm}
        hideLoginForm={hideLoginForm}
      />
    </section>
  );
}

/*<div className="join-us-title">
        <h2 className="join-us-title-content">Join us</h2>
        </div> */
