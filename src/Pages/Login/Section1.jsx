import React from "react";
import sec1_img from "../../assets/section_2/tv.png";
import sec2_img from "../../assets/section_4/image.jpg";
import sec3_img from "../../assets/section-5/device.png";
import sec4_img from "../../assets/section_6/children.png";


import "./Login.css";

const Section1 = () => {
  return (
    <>
    <hr style={{backgroundColor:"gray", height:"15px"}} />
      <div className="sec-1">
        <div className="sec1-left">
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="sec1-right">
          <img src={sec1_img} alt="" />
        </div>
      </div>

    <hr style={{backgroundColor:"gray", height:"15px"}} />

      <div className="sec-1">
        <div className="sec1-left">
          <img src={sec2_img} alt="" />
        </div>
        <div className="sec1-right">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>

    <hr style={{backgroundColor:"gray", height:"15px"}} />

      <div className="sec-1">
        <div className="sec1-left">
          <h1>Watch everywhere</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="sec1-right">
          <img src={sec3_img} alt="" />
        </div>
      </div>

      <hr style={{backgroundColor:"gray", height:"15px"}} />

      <div className="sec-1">
        <div className="sec1-left">
          <img src={sec4_img} alt="" />
        </div>
        <div className="sec1-right">
          <h1>Create profiles for kids</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>

    <hr style={{backgroundColor:"gray", height:"15px"}} />

    </>
  );
};

export default Section1;
