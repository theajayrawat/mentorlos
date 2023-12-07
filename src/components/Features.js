import React from 'react'
import './Features.css'
import tick from '../asset/tick.png'
import f2 from '../asset/f2.png'
const Features = () => {
  return (
    <div className='fe123'>

<div className="">
        <div className="d-cent">
          <img src={tick} alt="" />
        </div>
        <h2 className='fea'>Features</h2>
        <p className='fea_txt'>Mentorlo is designed to empower professionals, organizations, 
        and educational institutions by streamlining the mentorship process and simplifying event management.</p>
      </div> 


      <div className='cont d-flex-sb'>

        <div className='f2'>
          <img src={f2} alt="" />
        </div>

        <div>
          <div className="ind">
          
            <div className='cir'><span>1</span></div>

            
           
        
            <p className='ind_txt'>Simplified process to find the right Mentor</p>
            < p className='ind_txt2'>Through a user-friendly interface, mentees can search for, filter,
            <br />
             and book mentorship sessions based on their specific needs and objectives.</p>
          </div>

          <div className="ind">
          
          <div className='cir'><span>1</span></div>

          
         
      
          <p className='ind_txt'>Simplified process to find the right Mentor</p>
          < p className='ind_txt2'>Through a user-friendly interface, mentees can search for, filter,
          <br />
           and book mentorship sessions based on their specific needs and objectives.</p>
        </div>

        <div className="ind">
          
          <div className='cir'><span>1</span></div>

          
         
      
          <p className='ind_txt'>Simplified process to find the right Mentor</p>

          < p className='ind_txt2'>Through a user-friendly interface, mentees can search for, filter, 
          <br />
          and book mentorship sessions based on their specific needs and objectives.</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Features
