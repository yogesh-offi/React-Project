import React, { useState } from "react";
import '../css/Sign up.css';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const prasath= useNavigate();
  const [name,setName] = useState([""]);
  const [phone,setPhone] = useState([""]);
  const [email,setEmail] = useState([""]);
  const [pass,setPass] = useState([""]);
  const [cpass,setCpass] = useState([""]);
  const savena = (event) =>{
      setName(event.target.value);

  }
  const saveph = (event) =>{
      setPhone(event.target.value);
  }
  const saveea = (event) =>{
      setEmail(event.target.value);
  }
  const savepa = (event) =>{
      setPass(event.target.value);
  }
  const savecpa = (event) =>{
      setCpass(event.target.value);
  }
  const printda = async (event) =>{
    event.preventDefault();
      console.log(name);
      console.log(phone);
      console.log(email);
      console.log(pass);
      console.log(cpass);
        try{

          await axios.post('http://localhost:3005/Posts',{
            Name:name,
            PhoneNumber:phone,
            Email:email,
            Password:pass,
            ConfirmPassword:cpass,
          });
        }
        catch(error)
        {
            console.log("ERROR",error);
        }
        prasath('/Login');
      }
  return (
        <div className="tot">
    <div className="outbox">
      <form  onSubmit={printda}required>
        <div>
          <h3 style={{textAlign:"center"}}>YOUR PERSONAL DETAILS</h3>
          <input type="text" placeholder="NAME" required id="nameInput"  onChange={savena}/>
        </div>
        <div>
          <input type="tel" placeholder="PHONE NUMBER" required id="phoneInput"  onChange={saveph}/>
        </div>
        <div>
          <input type="email" placeholder="EMAIL" required id="emailInput" onChange={saveea} />
        </div>
        <div>
          <input type="password" placeholder="PASSWORD" required minLength={6} id="passwordInput"  onChange={savepa}/>
        </div>
        <div>
          <input type="password" placeholder="CONFIRM PASSWORD" required minLength={6} id="confirmPasswordInput"  onChange={savecpa}/>
        </div>
        <div>
          <button type="submit" id="submit5" required>Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Register;
