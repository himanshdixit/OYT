import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

import '/public/css/productlist.css';

import deskP from '/public/images/mbslider/1.jpg';
import phoneP from '/public/images/mbslider/mb1.jpg';

const Test=()=>{

    const nav = useNavigate();

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
      }
      
      const [currentDate, setCurrentDate] = useState(getDate());
      
      const[inputValue, setInputValue]=useState({
        amount:"5000",
        currency:"INR",
        receiptId:"order_OKG0TBqz4NLEUR"
      });
      
      const handleInput=(e)=>{
          setInputValue({...inputValue, [e.target.name] : e.target.value});
      }
      
      const handleSubmit= async (e)=>{
          e.preventDefault();
          console.log(inputValue);
          // const url="http://localhost:8000/api/login";
        //    const url="https://oyt.travel/api/login";
        //   const res = await axios.post(url,inputValue)
        //   .then( resp => { console.log(resp);
            
        //     localStorage.setItem("user-info",JSON.stringify(resp)); 

        //     if(params.pay){
        //       nav("/payment/"+params.pay,{state:data});
        //       window.location.reload(true);
        //     }else{
        //       window.location.reload(true);
        //   }

        // } )
        //   .catch( err => console.log(err) );

        var options = {
            "key": "rzp_test_iRDqzWHb91atkz", // Enter the Key ID generated from the Dashboard
            "amount": "5000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            //"order_id": "order_OKG0TBqz4NLEUR", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com", 
                "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
    
        rzp1.open();

        // console.log(options);
        // console.log(options.order_id);


      }


    return(
        <>

{/* <!-- --------------------------------------------- Body Start ------------------- --> */}


<div className='deskContent'>
<img src={deskP} class="img-fluid" style={{width:'100%',marginTop:'70px'}} alt="oyt" />
</div>
<div className='phoneContent'>
<img src={phoneP} class="img-fluid" style={{width:'100%'}} alt="oyt" />
</div>

<br/>
<div style={{ textAlign:'center' }}>
<b style={{textAlign:'center',marginTop:'15px',marginBottom:'30px  ',color:'#3c77c9  ',fontSize:'2.5rem'}}>&nbsp; Testing Payment &nbsp;
</b>
<br/>
<br/>

<div className='container'>

<form onSubmit={handleSubmit} class="info-box" style={{padding:'10px',border:'1px solid rgba(0,0,0,.03)',borderRadius:'15px',backgroundColor:'rgba(0,0,0,.03)'}}>

<div class="col form-group">
<label style={{ color: '#3c77c9',fontWeight:'700'}}>Ammount </label>
<input type="text" name="amount" class="form-control" id="amount" placeholder="5000" value="5000" onChange={handleInput} readOnly/>
</div> 

<div class="col form-group">
<label style={{ color: '#3c77c9',fontWeight:'700'}}>Receipt ID </label>
<input type="text" class="form-control" name="receiptId" id="receiptId" placeholder="qwsaq1" value="qwsaq1" onChange={handleInput} readOnly/>
</div>

<div style={{textAlign:'center'}}><button type="submit" class="btn btn-primary" style={{
    fontSize: '14px',
    marginLeft: '5px',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    borderRadius: '15px'}}>Pay Now</button></div>

</form>

</div>

</div>

<br/>
<br/>

{/* <!-- --------------------------------------------- Body END ------------------- --> */}
      
        </>
    );
}

export default Test;