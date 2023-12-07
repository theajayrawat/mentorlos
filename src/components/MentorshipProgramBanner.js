import React from 'react';
import "./MentorshipProgramBanner.css";
import Women from "../asset/wom.png";
// import Arrow from "../asset/arrow-narrow-up-right.png";

const MentorshipProgramBanner = () => {
  return (
    <div className='MentorshipBanner'>
      <div className='MentorshipFirst'>
        <div className='MentorshipFirstHeading'><h1>Run Impactful
          <br /> Mentorship <br /> Programmes at Your <br />
          Institute</h1></div>
        <div className='MentorshipFirstSubHeading'><h3>Drive professional growth and track the effectiveness of your Mentorship <br /> Programme with efficient strategies & optimal solutions.</h3></div>
        <div className='MentorshipFirstBookDemo'>
          <button className='Demo-Btn'>
            <div className="button-content">
              <span>Book a Demo</span>
              {/* <img className='arrow' src={Arrow} alt='Arrow' /> */}
            </div>
          </button>
        </div>
      </div>
      <div className='MentorshipSecond'>
        <img src={Women} alt='Depali' />
      </div>
    </div>
  );
}

export default MentorshipProgramBanner;