import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default function Login(args) {
    const [modal, setModal] = React.useState(false);

    const toggle = () => setModal(!modal);
  
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  // console.log(loginFormData)

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  // console.log(loginFormData)

  function handleSubmit(event) {
    console.log("Login is working");
    console.log(loginFormData);
    event.preventDefault();
  }
  return (
    <>
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-8 login-box bg-red text-light d-flex flex-column justify-content-end pb-5 ps-5 ">
          <h2 className="fw-bold">Signin with Sosin Classes</h2>
          <a href="./" className="link-light text-decoration-none">
            <h4 className="fw-light">
              <b>Home</b>
            </h4>
          </a>
        </div>

        <div className="col-md-4 pt-5">
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={require("../assets/Sosin Logo.jpeg")}
                alt="Logo"
                className="rounded-circle logo-img"
              ></img>

              <h6 className="txt-red text-center fw-bolder mx-1 pt-3 pb-2">
                Sosin
                <br />
                Classes
              </h6>
            </div>
            <h4 className="fw-semibold text-center">Login into Your Account</h4>
            <form className="my-3" onSubmit={handleSubmit}>
              <div className="mx-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  User Name
                </label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="exampleInputEmail1"
                  placeholder="eg: John"
                  // aria-describedby="emailHelp"
                  aria-describedby="inputGroupPrepend2" required
                  onChange={handleChange}
                  name="email"
                  value={loginFormData.email}
                />
              </div>
              <div className="mb-2 mx-3">
                <label
                  htmlFor="password"
                  className="form-label fw-semibold  mt-1"
                >
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="**********"
                  aria-describedby="inputGroupPrepend2" required
                  name="password"
                  value={loginFormData.password}
                  onChange={handleChange}
                />
                {/* <FontAwesomeIcon icon = {faEye}></FontAwesomeIcon> */}
              </div>

              {/* <a
                href="#" className="d-flex justify-content-end txt-grey mb-3 mx-3 text-decoration-none" 
              >
                <p className="mb-0 pe-auto" onClick={toggle} >Forgot Password?</p>
              </a> */}
              <a
                 href="#" className="d-flex justify-content-end txt-grey mb-3 mx-3 text-decoration-none pe-none" 
              >
                <span  className="pe-auto"onClick={toggle}>Forgot Password?</span>
              </a>
              <div className=" d-flex justify-content-center mb-3">
                <button
                  type="submit"
                  className=" fw-semibold bg-red border-0 text-light rounded-pill px-5 py-2 btn-hover"
                >
                  Login
                </button>
              </div>
              <h6 className=" text-center txt-grey">
                Don't have an account?
                <span>
                  <a className="txt-red text-decoration-none ms-1" href="./">
                    Register Now
                  </a>
                </span>
              </h6>
              <p className="text-center txt-grey py-1">
                © Erasmus Training Services Pvt. Ltd.2022
              </p>
            </form>
          </div>
        </div>
      </div>

      


 
  
    <div>
      {/* <Button color="danger" onClick={toggle}>
        Click Me
      </Button> */}
      
      <Modal isOpen={modal} toggle={toggle} {...args} className="out-trans br-none">
        {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
        <ModalBody >
        <div className="container d-flex flex-column rounded-0 " >
      <div className="row align-items-center justify-content-center ">
        <div className="col-12 ">
          <div className="rounded-0  ">
            <div className="outline-red my-4 mx-1 px-1 py-2">
              <div >
                <h4 className="text-center pt-1">Recover Password</h4>
                <p className="mb-2 text-center">
                  Enter your Email and instructions will be sent to you!
                </p>
              </div>
              {/* <form>
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
                    onClick={toggle}
                  >
                    Reset
                  </button>
                </div>
              </form> */}
              {/* <div style="max-width:400px;margin:auto"></div> */}
              <form className="my-3" >
              <div className="mx-3">
                <label htmlFor="email" className="form-label fw-semibold ">
                 Email Id
                </label>
                <input
                  type="email"
                  className="form-control mt-0"
                  id="exampleInputEmail1"
                  placeholder="test@test.com"
                  // aria-describedby="emailHelp"
                  aria-describedby="inputGroupPrepend2" required
                  
                  name="email"
                 
                />
                <div className=" d-flex justify-content-center">
                  <button
                    type="submit"
                    className="fw-semibold bg-red border-0 text-light rounded-pill mt-4 px-5 py-2 btn-hover"
                    
                  >
                    Reset
                  </button>
                </div>
              </div>
              
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
     
    </div>
  



      
    </div>
    </>
  );
}
