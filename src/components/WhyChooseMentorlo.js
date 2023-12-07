import React, { useState } from 'react'
import wht from '../asset/whitei.png'
import pic from '../asset/why.png'
import sq from '../asset/sq.png'
import './WhyChooseMentorlo.css'

const WhyChooseMentorlo = () => {
  const [clickedDiv, setClickedDiv] = useState(1);

  // const handleClick = () => {
  //   setIsClicked(!isClicked); 
  // };
  const handleClick = (index) => {
    setClickedDiv(index === clickedDiv ? null : index);
  };
  return (
    <div className='wM'>  

      <div className="">
        <div className="d-cent ">
          <img src={wht} alt="" />
        </div>
        <h2 className='heading'>Why do Institutes choose Mentorlo?</h2>
        <p className='p-h-txt'>Mentorlo offers a user-friendly process to make mentorship simple and accessible for both Mentors & Mentees.</p>
      </div> 

      {/* image and divs      */}
      <div className="outer d-flex3">
       
         <div className="inner">
      {[1, 2, 3,4].map((index) => (
        <div
          key={index}
          className={`inner1 back ${index === clickedDiv ? 'clicked' : ''}`}
          onClick={() => handleClick(index)}
        >
          <span>
            <img src={sq} alt="" />
          </span>
          <div>
            <p className="inner_txt">Offer 1:1 Mentorship Session</p>
            {index === clickedDiv && (
              <p>
                Provide personalised 1:1 sessions with tailored support and individual attention for meaningful progress.
              </p>
            )}
          </div>
        </div>
      ))}
    </div>

        <div className="inner dis ">
          <img src={pic} alt="" />

        </div>
      </div>
    
    </div>
  )
}

export default WhyChooseMentorlo
