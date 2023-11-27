import React from 'react'
// import InputAdornment from '@mui/material/InputAdornment';
import '../css/Empty.css'
const  Empty = ()=> {
  return (
    <div className='empty'>
       <div className='empty1'>
        <input type='password' placeholder='6 char'></input>
            <div className='empty2'>

            </div>
       </div>
    </div>
  )
}

export default Empty