import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa} from "@fortawesome/free-solid-svg-icons";
// import { faTwitter, faFontAwesome,  } from '@fortawesome/free-brands-svg-icons'
// import { fa } from "@fortawesome/free-solid-svg-icons";
export default function AboutUs() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-white py-0 my-font mx-7 ">
        <div className="container-fluid">
          <div className="d-flex align-content-center justify-content-start ">
            <a className="navbar-brand" href="#">
              <div className="d-flex align-items-center justify-content-end ">
                <img
                  src={require("../assets/Sosin Logo.jpeg")}
                  alt="Logo"
                  className="rounded-circle logo-img"
                ></img>

                <h6 className="txt-red text-center fw-bolder mx-1 pt-3 pb-2 fs-12">
                  Sosin
                  <br />
                  Classes
                </h6>
              </div>
            </a>
          </div>

          <button
            className="navbar-toggler d-flex-justify-content-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="d-flex justify-content-end border border-warning"> */}
          <div className=" collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav justify-content-end ">
              <li className="nav-item ps-4">
                <a className="nav-link fw-bold black-text " href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item  ps-4 ">
                <a className="nav-link  fw-bold black-text" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item  ps-4">
                <a className="nav-link  fw-bold black-text" href="#">
                  Test Series
                </a>
              </li>
              <li className="nav-item dropdown ps-4">
                <a
                  className="nav-link dropdown-toggle  fw-bold black-text"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Current Affairs
                </a>
                <ul className="dropdown-menu ">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item  ps-4">
                <a className="nav-link  fw-bold black-text" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item  ps-4">
                <a className="nav-link fw-bold black-text" href="#">
                  My Dashboard
                </a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link fw-bold txt-red fs-12" href="#">
                  Logout
                </a>
              </li>
              <li className="nav-item ps-4">
                <a className="nav-link red-blob rounded-5 " href="#"></a>
              </li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </nav>
      <header className="text-center mt-3 mx-7">
        <h1 className="cs-font500">About Us</h1>
      </header>
      <div className="card bg-lt-red mt-3  border-bottom border-2 mx-7">
        <section className="pt-4 pb-2 px-4">
          <p className=" text-align">
            Us Sosin Classes (Formerly Known as Target IAS) is a dream project
            of our Founder Director Mrs. Sosin Thayyaba Revella. With a varied
            experience as a field Anthropologist and as a renowned Faculty in
            Anthropology, Mrs. Sosin has been guiding the civil services
            aspirants to achieve their dreams. Sosin Classes began its journey
            as an Offline Coaching Institute, now functioning as Online Training
            Institute, providing Online Coaching for UPSC Civil Services
            Examinination, UGC NET, and State Public Service Commissions Exams.
            Sosin Classes established itself as the Best Civil Services Coaching
            Institute in Hyderabad with special credentials of Best Training
            Institute for ANTHROPOLOGY for Civil Services, Competitive Exams,
            and Other Academic Courses. Sosin Classes offers comprehensive
            coaching for Civil Services Mains with online audio/video classes,
            preparation guidance, study material, mock tests, interview guidance
            with access to various student resources. With over a 1000
            selections in 17 years of its functioning, Sosin Classes is offering
            personalised guidance to the civil services aspirants with various
            optional subjects such as Anthropology, Geography and Public
            Administration. Our online courses are designed to serve the
            interests of aspirants in the best possible manner. We welcome you
            all to look into our online coaching programs and get the maximum
            benefit from the scientifically designed and executed courses.
          </p>
        </section>
      </div>

      <header className="text-center mt-5  mx-7">
        <h1 className="cs-font500">Vision</h1>
      </header>
      <div className="card bg-lt-red mt-3 mb-1  mx-7 border-bottom border-2">
        <section className=" pt-4 pb-2 px-4">
          <p className=" text-align">
            To create academicians and scholars in different fields, so that
            they can play a pivotal role in improving the understanding of the
            humanity and work for their well-being through just means.
          </p>
        </section>
      </div>

      <header className="text-center mt-5  mx-7 ">
        <h1 className="cs-font500">Mission</h1>
      </header>
      <div className="card bg-lt-red mt-3 mb-1 border-bottom border-2  mx-7">
        <section className=" pt-4 pb-2 px-4 mb-3">
          <p className=" text-align">
            Help aspiring candidates to excel in performance in various national
            and international courses and competitive examinations, there by
            equipping them with necessary knowledge about how to enter different
            national and international organisations, dawning important
            positions.
          </p>
        </section>
      </div>

      <footer className="bg-lt-red my-font mt-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-9 mt-5 px-5">
              <div>
                <h3 className="txt-black fw-bold sz-18">UPSC Courses</h3>
              </div>

              <div className="d-flex justify-content-start list-unstyled pt-3">
                <p className=" txt-black fs-13 pe-5">General Studies</p>
                <p className=" txt-black fs-13 pe-5">Anthropology</p>
                <p className=" txt-black fs-13 pe-5">Test Series</p>
                <p className=" txt-black fs-13 pe-5"> Mentorship</p>
              </div>
            </div>
            <div className="col-md-3 mt-5 px-5">
              <div>
                <h3 className="txt-black fw-bold sz-18">Sosin Classes</h3>
              </div>
              <div className="d-flex list-unstyled pt-3">
                <p className="txt-black fs-13 text-align">
                  H.No. 1-10-196 (New No. 177) Ashok Nagar X Roads, Ashok Nagar,
                  Hyderabad – 500020, Telangana, India. Email:
                  info@sosinclasses.com Phone: 9989966744, 9000066690
                </p>
              </div>
              {/* <div>
              <p className= "txt-black fs-12">H.No. 1-10-196 (New No. 177) Ashok Nagar X Roads, Ashok Nagar, Hyderabad – 500020, Telangana, India. Email: info@sosinclasses.com Phone: 9989966744, 9000066690</p>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-6 px-5 ">
              <p className="fs-12 txt-lt-black ">
                © Erasmus Training Services Pvt. Ltd.2022
              </p>
            </div>
            <div className="col-6 ">
              <div className="fs-12 ">
                <a href="#" className="text-decoration-none ps-4">
                  Help
                </a>
                <a href="#" className="text-decoration-none ps-4">
                  Privacy
                </a>
                <a href="#" className="text-decoration-none ps-4">
                  Terms
                </a>
                {/* <a href="#" className="text-decoration-none ps-3">
                  <FontAwesomeIcon icon={faEye} />
                  <i class="fab fa-facebook-f"/>
                </a>
                <a href="#" className="text-decoration-none">
                  Terms
                </a>
                <a href="#" className="text-decoration-none">
                  Terms
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
