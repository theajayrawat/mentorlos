import React, { useState } from 'react'
import './FutureImpactMessage.css';
import pic3 from '../asset/pic3.png'

const FutureImpactMessage = () => {
  const [selectedDiv, setSelectedDiv] = useState(2);

  const handleClick = (index) => {
    setSelectedDiv(index);
  };
  return (
    <div className='cont'>
      <div className='topdiv'>
        <p className='fitxt'>Shape Students’ Future. We’ve got the rest covered!</p>
      </div>
<div className='d-flex topdiv'>



      <div>
      <div
        className={`inner ${selectedDiv === 1 ? 'bb' : ''}`}
        onClick={() => handleClick(1)}
      >
        <p className='inner_txt_1'>Define their Career Roadmap</p>
        <p className='inner_txt_2'>Guide them to set smart goals for their future and build a personalised roadmap to reach there.</p>
      </div>
      <div
        className={`inner ${selectedDiv === 2 ? 'bb' : ''}`}
        onClick={() => handleClick(2)}
      >
        <p className='inner_txt_1'>Define their Career Roadmap</p>
        <p className='inner_txt_2'>Guide them to set smart goals for their future and build a personalised roadmap to reach there.</p>
      </div>
      <div
        className={`inner ${selectedDiv === 3 ? 'bb' : ''}`}
        onClick={() => handleClick(3)}
      >
        <p className='inner_txt_1'>Define their Career Roadmap</p>
        <p className='inner_txt_2'>Guide them to set smart goals for their future and build a personalised roadmap to reach there.</p>
      </div>
       
      </div>
 
      <div className="crousel">
  <img src={pic3} alt="" />
</div>

      </div>


    </div>
  )
}

export default FutureImpactMessage
