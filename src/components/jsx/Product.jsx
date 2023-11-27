import React from "react";
import '../css/product.css'
import TextField  from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
const Product = () =>{
    const click=useNavigate();
    const setclick = () =>{click('/Submission')}
    return(
        <div className="wholepage">
            <div className="outsid">
                <h1 className="hh1">Product Details</h1>
                <table>
                    <tr >
                        <td className="boxe1">
                        <TextField id="demo-helper-text-misaligned-no-helper" label="Product Type" />
                        </td>
                    </tr>
                    <tr>
                        <td className="boxe2">
                        <TextField id="demo-helper-text-misaligned-no-helper" label=" Weight(in kg)"  />
                        </td>
                    </tr>
                    <tr >
                        <td className="boxe3">
                        <TextField id="demo-helper-text-misaligned-no-helper" label="Product Value(INR)" className="textfield"/>
                        </td>
                    </tr>
                    <tr>
                        <td className="boxe6">
                            <select className="boxe4">
                            <option value="" disabled selected>Type of Courier</option>
                            <option value="option1">Speed</option>
                            <option value="option2">Normal</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td className="boxe5">
                            <td>Date And Time Of Product Dispatch</td>
                            <input type='datetime-local'></input>
                        </td>
                    </tr>
                </table>
                <div className="sub1">
                    <button onClick={setclick} required >SUBMIT</button>
                </div>
            </div>
        </div>
    )
}
export default Product