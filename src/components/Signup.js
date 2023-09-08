import Parse from 'parse'
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

Parse.initialize('myAppId', '3017258d6379457b86c77f3bb22eaa99');
Parse.serverURL = 'http://164.92.121.0:1337/parse'

function Signup() {
  const email = useRef();
  const password = useRef();
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const user = new Parse.User();
    user.set("username", emailValue);
    user.set("password", passwordValue);
    user.set("email", emailValue);
    user.signUp().then(function () {
      console.log("success");
    }, function (error) {
      console.log(JSON.stringify(error));
      setMsg(error.message);
    });
  };


  return (
    <section class="h-100">
      <div class="container h-100">
        <div class="row justify-content-sm-center h-100">
          <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div class="text-center my-5">
              <h1>Welcome to our React Tutorial</h1>
            </div>
            <div class="card shadow-lg">
              <div class="card-body p-5">
                <h1 class="fs-4 card-title fw-bold mb-4">Register</h1>
                <form method="POST" class="needs-validation" onSubmit={submit}>

                  <div class="mb-3">
                    <label class="mb-2 text-muted" >E-Mail Address</label>
                    <input ref={email} id="email" type="email" class="form-control" name="email" required />
                    <div class="invalid-feedback">
                      Email is invalid
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="mb-2 text-muted" >Password</label>
                    <input ref={password} id="password" type="password" class="form-control" name="password" required />
                    <div class="invalid-feedback">
                      Password is required
                    </div>
                  </div>

                  <p type="text" class="form-text text-muted mb-3" >{msg}</p>

                  <div class="align-items-center d-flex">
                    <button type="submit" class="btn btn-primary ms-auto">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div class="card-footer py-3 border-0">
                <div class="text-center">
                  Already have an account? <Link to="/login" class="text-dark">Login</Link>
                </div>
              </div>
            </div>
            <div class="text-center mt-5 text-muted">
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Signup;





