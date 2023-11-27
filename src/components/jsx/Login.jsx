import React, { useEffect, useState } from "react";
import '../css/Login.css';
// import Button from '@mui/material/'
import {useNavigate} from 'react-router-dom';
import axios from "axios";
// import { Password } from "@mui/icons-material";
const Page = () =>{
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [data,setData]=useState([]);
    const [showPassword,setShowPassword] = useState(false);
    useEffect (() => {
        const fetchdata = async ()=>{
            const datas = await axios.get('http://localhost:3005/posts')
            setData(datas.data);
        }
        fetchdata();
    },[]);

    const venu = useNavigate();
    const onHandleEmail = (event)=>{
        setEmail(event.target.value);
    }
     
    const onHandlePassword = (event)=>{
        setPassword(event.target.value);
    }
    const handleTogglePassword = () =>{
        setShowPassword (!showPassword);
    };
    
    const onHandleSubmit = async (event) => {
        event.preventDefault();
        console.log(email+' '+password);
        const eindex = data.findIndex((data)=>data.Email === email);
        const pindex = data.findIndex((data)=> data.Password === password);
        console.log(data);
        try{
                await axios.post('http://localhost:3005/profiledata',{
                Email:email,
                Password:password,
        });
            }
            catch(error)
            {
                console.log("ERROR",error);
            }
        if(eindex !==-1 &&  pindex !==-1 && eindex === pindex)
        {
            venu('/Order')
        }
        else
        {
            alert("The data entered is wrong");
        }
    }

    return (
        <form onSubmit={onHandleSubmit} className="back" required>
        <div className="out">
        <div className="box">

           <div style={{fontFamily:"unset", fontSize:"30px"}}>Login</div>
           <p style={{color:'black'}}>Doesn't have a account? <button type="submit" onClick={(event)=>venu('/Sign up')} className="signinbutton">Sign up</button></p>
          
        <div className="box1">

            <div style={{fontFamily:"sans-serif",fontSize:"20px"}}>Email Address</div>
            <input type="email" placeholder="exampleemail@gmail.com" onChange={onHandleEmail} id="namebox" required></input>

        </div>
        <div className="box2">

            <div style={{fontFamily:"sans-serif",fontSize:"20px"}}>Password</div>
            <div className="twobox">
            <input type={showPassword ? 'text' : 'password'} placeholder="Enter 6 characters or more" onChange={onHandlePassword} required minLength={6} id="namebox1"></input>
            </div>
            <input type="checkbox" checked={showPassword} onChange={handleTogglePassword} className="showpass" ></input> 
            Show Password

        <div>
            <button type="submit"   id="loginbutton" required>LOGIN</button>
        </div>
        </div>
        </div>
        <div className="pic">
        </div>
        </div>
        </form>
    )
}
export default Page;
    