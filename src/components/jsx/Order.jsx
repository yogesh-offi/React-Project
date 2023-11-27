import React from "react";
import '../css/Order.css';
import {useNavigate} from 'react-router-dom'
const Order = () =>{
    const venuprasath =useNavigate();
    const setvenuprasath = () =>{venuprasath('/Product')}
    return(
        <div className="fullpage">

            <div className="outside">
                <table className="boxes">
                    <tbody>
                    <tr>
                        <td id="boxes1">

                        </td>
                        <td id="boxes2">
                            <h1>Book Your Shipment</h1>
                            <p style={{fontSize:"0px"}}>Request a pickup and we'll be at your door shortly</p>
                        </td>
                    </tr></tbody>
                </table>
                        <fieldset className="sender">
                            <div style={{fontSize:"40px"}} className="send">Sender's Details</div>
                            <div id="inbox">
                                Name<br></br>
                                <input type="text" placeholder=" Name" required id="inbox5"></input>
                            </div>
                            <div id="inbox">
                                Address<br></br>
                                <textarea rows={2} cols={35}></textarea>
                            </div>
                            <div id="inbox">
                                Phone Number<br></br>
                                <input type="tel" placeholder=" Phone Number" required id="inbox5"></input>
                            </div>
                            <div id="inbox">
                            Pincode
                            <br></br>
                                <input type="tel" placeholder=" Pincode" required id="inbox5"></input>
                            </div>
                        </fieldset>
                        <fieldset className="Reciver">
                            <div style={{fontSize:"40px"}} className="receive">Receiver's details</div>
                            <div id="inbox">
                                Name<br></br>
                                <input type="text" placeholder=" Name" required id="inbox5"></input>
                            </div>
                            <div id="inbox">
                            Address<br></br>
                                <textarea rows={2} cols={35}></textarea>
                            </div>
                            <div id="inbox">
                            Phone Number<br></br>
                                <input type="tel" placeholder=" Phone Number" required id="inbox5"></input>
                            </div>
                            <div id="inbox">
                                Pincode<br></br>
                                <input type="tel" placeholder=" Pincode" required id="inbox5"></input>
                            </div>
                        </fieldset>
                        <button type="Submit" id="submit" onClick={setvenuprasath} required>Submit</button>
            </div>
        </div>

    )
}
export default Order;