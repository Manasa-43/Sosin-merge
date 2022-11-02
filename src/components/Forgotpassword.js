import React from "react";

export default function Forgotpassword() {
  return (

    <div className="container d-flex flex-column" >
      <div className="row align-items-center justify-content-center min-vh-100">
        <div className="col-12 col-md-8 col-lg-6 ">
          <div className="card p-4 rounded-0 out-trans">
            <div className="card-body outline-red ">
              <div className="mb-4 ">
                <h4 className="text-center">Recover Password</h4>
                <p className="mb-2 text-center">
                  Enter your Email and instructions will be sent to you!
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label for="email" className=" fw-semibold form-label">
                    Email Id
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    placeholder="test@test.com"
                    required=""
                  />
                </div>
                <div className="mb-3 d-flex justify-content-center">
                  <button
                    type="submit"
                    className="fw-semibold bg-red border-0 text-light rounded-pill px-5 py-2"
                  >
                    Reset
                  </button>
                </div>
              </form>
              {/* <div style="max-width:400px;margin:auto"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <form className="my-3" onSubmit={handleSubmit}>
              <div className="mx-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  User Name
                </label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="exampleInputEmail1"
                  placeholder="eg: John"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  name="email"
                  value={loginFormData.email}
                />
              </div>
            </form> */}

  //           <div class="col-md-4">
  //   <label for="validationDefaultUsername" class="form-label">Username</label>
  //   <div class="input-group">
  //     <span class="input-group-text" id="inputGroupPrepend2">@</span>
  //     <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required>
  //   </div>
  // </div>