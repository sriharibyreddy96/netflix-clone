import React from "react";
import "./Login.css";
import { IoIosArrowForward } from "react-icons/io";
import Section1 from "./Section1";
import Faq from "./Faq";
import Footer from "../../Components/Footer/Footer";

const Login = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-cont">
            <img
              src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
              alt="netflix"
            />

            <div className="btns">
              <input type="text" placeholder="English" />
              <button>SIGN IN</button>
            </div>
          </div>

          <div className="hero-cont">
            <h1>Enjoy big movies, hit series and more from ₹149.</h1>
            <h3>Join today. Cancel anytime.</h3>
            <h6>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
            <div className="mail">
              <input type="email" placeholder="Email Address" />
              <button>
                Get Started{" "}
                <IoIosArrowForward size={20} style={{ paddingTop: "5px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Section1 />

      <Faq />
      <hr style={{ backgroundColor: "gray", height: "15px" }} />

      

      <Footer />
    </>
  );
};

export default Login;
