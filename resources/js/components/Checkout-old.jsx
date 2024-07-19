import React from 'react';

const Checkout=()=>{
    return(
        <>
          

<img src="images/pagebanners/booking.jpg" class="img-fluid" style={{width:'100%'}} alt="oyt" />
<br/>
<br/>


<div class="container">
<div class="row">
    <div class="col-lg-6">
<div style={{textAlign:'center'}}>
<h3>QR Code</h3>
    <img class="img-fluid" src="images/e1.png" style={{height:'200px',width:'auto',padding:'5px'}} alt="OYT"/>
</div>
</div>
    <div class="col-lg-6">
        <div class="card" style={{padding:'15px'}}>
        <h5 class="card-title" style={{textAlign:'center',fontWeight:'700',color:'#ff3d00'}}>Ammount : Rs. 50000 /-</h5>
        <button class="btn btn-primary">Pay Now</button>
        </div>
    </div>
</div>
</div>
           
        </>
    );
}

export default Checkout;