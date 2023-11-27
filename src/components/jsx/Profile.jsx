import React from 'react'
import '../css/Profile.css'
const Profile = () => {
  return (
    <div className='bigbox'>
      <div className='bigbox1'> 
        
      </div>
      <div className='box1'>
        NAME<br></br>
        <input type='text' placeholder='VENU PRASATH' id='box1'></input>
      </div>
      <div className='box2'>
        EMAIL<br></br>
        <input type='email' placeholder='727722EUCS196@skcet.ac.in' id='box2'></input>
      </div>
      {/* <div className='box3'>
        PASSWORD<br></br>
        <input type='password' placeholder='' id='box3'></input>
      </div> */}
    </div>
  )
}

export default Profile