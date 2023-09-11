import Parse from 'parse'
import { useRef } from "react";

function Forgot() {
  const email = useRef();

  const submit = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    console.log(emailValue);
    Parse.User.requestPasswordReset(emailValue)
      .then(() => {
        // Password reset request was sent successfully
      }).catch((error) => {
        // Show the error message somewhere
        alert("Error: " + error.code + " " + error.message);
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
                <h1 class="fs-4 card-title fw-bold mb-4">Forgot Password</h1>
                <form method="POST" class="needs-validation" onSubmit={submit} >
                  <div class="mb-3">
                    <label class="mb-2 text-muted" >E-Mail Address</label>
                    <input ref={email} id="email" type="email" class="form-control" name="email" required />
                  </div>

                  <div class="d-flex align-items-center">
                    <button type="submit" class="btn btn-primary ms-auto">
                      Send Link
                    </button>
                  </div>
                </form>
              </div>
              <div class="card-footer py-3 border-0">
                <div class="text-center">
                  Remember your password? <a href="index.html" class="text-dark">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forgot;