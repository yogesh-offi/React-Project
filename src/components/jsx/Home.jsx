import React from "react";
import '../css/Home.css'
import  Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import {useNavigate} from 'react-router-dom'
const Home = () =>{
    const navi=useNavigate();
    const vig=useNavigate();
    const place=useNavigate();
    const ho=useNavigate();
    const pro=useNavigate();
    const con=useNavigate();
    const setcon=()=>{con('/Contact')}
    const setpro=()=>{pro('/Profile')}
    const setho=()=>{ho('/Home')}
    const setplace=()=>{place('/Order')}
    const setnavi=()=>{navi('/Login')}
    const setvig=()=>{vig('/About')}
    return(
        <div className="whole">

            <div id='navbar'>
            <ul id='navul'>
                <div className="NLI">
                   <li>VP Courier's</li>
                </div>
                <div className="home">
                <li id='nli' onClick={setho}>Home</li>
                </div>
                <div className="place">
                <li id='nli' onClick={setplace}>Place Order</li>
                </div>
                <div className="contact">
                <li id='nli' onClick={setcon}>Contact us</li>
                </div>
                <div className="about">
                <li id='nli' onClick={setvig}>About us</li>
                </div>
                <li id='nli' onClick={(setpro)}>Profile</li>
            </ul>
            </div>
            <div className="fulpage">
            <div className="page">
            
            </div>
        </div>
            <div className="halfpage">
                <div className="line">
                <h1>One Of India’s Leading Integrated Express Logistics Provider</h1>
                </div>
                <div className="line1">
                    <div style={{color:"red",fontSize:"30px"}}>580</div>
                    Operating Facilities
                </div>
                <div className="line2"> 
                    <div style={{color:"red",fontSize:"30px"}}>12 million+</div>
                    Deliveries per month
                </div>
                <div className="line3">
                    <div style={{color:"red",fontSize:"30px"}}>2.21 million sq. ft</div>
                    area under management

                </div>
                <div className="line4">
                    <div style={{color:"red",fontSize:"30px"}}>96%</div>
                    of Indian Population Covered (approx.)
                </div>
                <div className="line5">
                    <div style={{color:"red",fontSize:"30px"}}>1500+</div>
                    Vehicles
                </div>
                <div className="line6">
                    <div style={{color:"red",fontSize:"30px"}}>14000+</div>
                    Channel Partners
                </div>
                <div className="square1">
                    <div className="square1pic">
                    </div>
                    <div>
                        <h2 className="express">Express Parcels</h2>
                        The Express Parcels Vertical offers a wide range of domestic products and services catering to C2C and B2B customers for documents and parcels of all sizes including part-truck-load shipments. Our product offerings range from time-sensitive express services to cost-effective ground express solutions. Our extensive delivery network currently reaches 96% of India’s population, making it easy for you to send documents and parcels of any size to almost anywhere in India.

                    </div>
                </div>
                <div className="square2">
                    <div className="square2pic">
                    </div>
                    <div>
                        <h2 className="international">International Shipments</h2>
                        We provide shipping to over 220 destinations by leveraging our tie-ups with international partners and our own offices in major commerce centers across the globe. Our wide range of international shipping solutions are available to both individuals and businesses ranging from time-sensitive options that prioritise speed to more cost-effective deliveries that optimise both speed and cost.
                    </div>
                </div>
                <div className="square3">
                    <div className="square3pic">
                    </div>
                    <div>
                       <h2>Integrated E-commerce Logistics</h2>
                       Our Integrated E-commerce Logistics is an end-to-end solution specifically designed for e-commerce companies who need quick and reliable logistics to gain a competitive edge. From pick-up and delivery to fulfilment, we are prepared to manage your business’ entire order lifecycle. Using technology we aim to optimise your delivery, giving your customers quick delivery at the best possible cost.
                    </div>
                </div>
                <div className="sign">
                    <div className="signline">
                        <div style={{fontSize:"30px"}} className="sign3">
                            Get Started With
                        </div>
                        <div className="sign1"> 
                                VP Courier's
                        </div>
                        <div className="sign2">
                            We make shipping hassle-free
                        </div>
                        <div>
                            <button onClick={setnavi} className="button1">Sign In</button>
                        </div>
                    </div>
                </div>
                    </div>
                    <div className="copy">
                        <div className='copy2'>© VP COURIERS Limited, All Rights Reserved.</div>
                       <div className="copy3"> <ButtonGroup variant="text" aria-label="text button group" >
                        <Button>Privacy Policy </Button>
                        <Button>Compliance Refund</Button>
                        <Button>Cancellation Policy</Button>
                        </ButtonGroup></div>
            </div>
        </div>
    )
}
export default Home