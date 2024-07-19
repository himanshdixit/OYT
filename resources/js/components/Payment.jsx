import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import payb from '/public/images/pagebanners/booking.jpg';

const Checkout=()=>{

// Get ID from URL
const params = useParams();
console.log(params.pay);

const nav = useNavigate();

useEffect(()=> {
  if(localStorage.getItem('user-info')){
    // window.location.reload(true); 
  }else{
  nav("/signup");
  window.location.reload(true);
  }
  },[])

const location = useLocation();
const data = location.state;
console.log(data);
//console.log(data.name);

// const prod_id=data.cruise_id;
// console.log(prod_id);


    return(
        <>
          

<img src={payb} class="img-fluid" style={{width:'100%'}} alt="oyt"/>
<br/>
<br/>


<div class="container">
<div class="row">
    <div class="col-lg-6">
<div style={{textAlign:'center'}}>
<h3>Details</h3>
<b>Name : {data.name}</b><br/>
<b>Mobile : {data.phone}</b><br/>
<b>Email : {data.email}</b><br/>

<br/>
</div>
</div>
    <div class="col-lg-6">
        <div class="card" style={{padding:'15px'}}>
        <h5 class="card-title" style={{textAlign:'center',fontWeight:'700',color:'#ff3d00'}}>Ammount : Rs. {params.pay} /-</h5>
        <button class="btn btn-primary">Pay Now</button>
        </div>
    </div>
</div>
</div>
           
        </>
    );
}

export default Checkout;