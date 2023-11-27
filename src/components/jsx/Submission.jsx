import React from "react";
import '../css/Submission.css'
const Submission = () =>{
    return(
        <div className="outb">
            <h1 className="thank">THANK YOU FOR YOUR ORDER</h1>
            <p className="para">VP COURIER'S is committed to safeguarding the confidentiality, integrity and availability of all physical
            and electronic information assets of the organization.
            We ensure that the regulatory, operational and contractual requirements are fulfilled.
            <br></br>
            SERVICE UPDATES:
            Please do not transfer money to payment links that are not shared from Delhivery's official accounts
            Delhivery does not require OTP or credentials for address confirmation for your delivery
            Our Customer Support team is reachable only from our website or app. Login with your phone number and raise your support request with us.
            </p>
            <div>
                <button className="orderconfirm" onClick={(event)=>(alert)("Your Order has been Confirmed")}>VIEW ORDER CONFIRMATION</button>
                <p className="policy" style={{textDecoration:"underline"}}>Read about our return policy</p>
            </div>
            <table className="fourbox"> 
                <tr>
                    <td>
                        <div className="delivery">
                            <div className="deliveryimage">
                            </div>
                            <p className="delna">Delivery</p>
                        </div>
                    </td>
                    <td>
                        <div className="payments">
                            <div className="paymentsimage">
                            </div>
                            <p className="payna">Payments</p>
                        </div>
                    </td>
                    <td>
                        <div className="returns">
                        <div className="returnsimage">
                            </div>
                            <p className="retna">Returns</p>
                        </div>
                    </td>
                    <td>
                        <div className="customer">
                        <div className="customerimage">
                            </div>
                            <p className="cusna">Service</p>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default Submission