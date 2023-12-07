import React from 'react'
import "./MentorshipProgramBenefits.css"
import dots from "../asset/dots.png"
import sh from "../asset/sh.png"

const MentorshipProgramBenefits = () => {
  return (
    <div>
      <div className="cont">
        <div className='d-cent'>
        <img src={dots} alt=""  />

        </div>
        <h1 className='mentorship'>Why run a Mentorship Programme in your Institute?</h1>
      <p className='studentwm'>Students with Mentors are:</p>
      </div>


      {/* circular pat */}
      <div className="d-flex2 cont">
        <div className="b1">
      
       <div className='d-cent'>
       <div className="circleCard d-cent">
          <h2 className='insideC' style={{alignItems:"center"}}>130%</h2>
        </div>
       </div>

        <p className='circle-txt'style={{marginTop:"6px"}} >more likely to hold leadership positions</p>
        </div>
        <div className="b1">
      
      <div className='d-cent'>
      <div className="circleCard d-cent">
         <h2 className='insideC' style={{alignItems:"center"}}>130%</h2>
       </div>
      </div>

       <p className='circle-txt'style={{marginTop:"6px"}} >more likely to hold leadership positions</p>
       </div>
       <div className="b1">
      
      <div className='d-cent'>
      <div className="circleCard d-cent">
         <h2 className='insideC' style={{alignItems:"center"}}>130%</h2>
       </div>
      </div>

       <p className='circle-txt'style={{marginTop:"6px"}} >more likely to hold leadership positions</p>
       </div>
       <div className="b1">
      
      <div className='d-cent'>
      <div className="circleCard d-cent">
         <h2 className='insideC' style={{alignItems:"center"}}>130%</h2>
       </div>
      </div>

       <p className='circle-txt'style={{marginTop:"6px"}} >more likely to hold leadership positions</p>
       </div>
     


        
      </div>

      {/* //card contents */}
      <div className="d-flex1 cont">
       <div className="card2">
        <img src={sh} alt="" className='mb-2' />
        <h2 className='place mb-2'>Better Placement Opportunities</h2>
        <p className='p-txt'>Boost your Institute’s placement success with less effort by offering students personalized guidance and industry insights. This will help them build valuable networking connections, improving their chances for coveted job placements.</p>
       </div>

       <div className="card2">
        <img src={sh} alt="" className='mb-2' />
        <h2 className='place mb-2'>Better Placement Opportunities</h2>
        <p className='p-txt'>Boost your Institute’s placement success with less effort by offering students personalized guidance and industry insights. This will help them build valuable networking connections, improving their chances for coveted job placements.</p>
       </div>

       <div className="card2">
        <img src={sh} alt="" className='mb-2' />
        <h2 className='place mb-2'>Better Placement Opportunities</h2>
        <p className='p-txt'>Boost your Institute’s placement success with less effort by offering students personalized guidance and industry insights. This will help them build valuable networking connections, improving their chances for coveted job placements.</p>
       </div>

       <div className="card2">
        <img src={sh} alt="" className='mb-2' />
        <h2 className='place mb-2'>Better Placement Opportunities</h2>
        <p className='p-txt'>Boost your Institute’s placement success with less effort by offering students personalized guidance and industry insights. This will help them build valuable networking connections, improving their chances for coveted job placements.</p>
       </div>

    

      </div>
      
    </div>
  )
}

export default MentorshipProgramBenefits
