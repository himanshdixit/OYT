import React from 'react';

const Cruisebookingform=()=>{
    return(
        <>

{/* <!-- --------------------------------------------- Body Start ------------------- --> */}


<img src="images/pagebanners/booking.jpg" class="img-fluid" style={{width:'100%'}} alt="oyt" />

<div class="container">
<div class="row" style={{marginTop:'20px'}}>

<div class="col-lg-8 col-md-8 col-xs-12">

<form action="{{ url('cruise_booking_form') }}" name="cruisebookingForm" method="post" onsubmit="return validateform()" enctype="multipart/form-data" class="info-box">

<input type="hidden" name="created_at" value="<?php echo $created_at; ?>" class="form-control" readonly />


<div class="card rounded shadow" style={{padding:'11px 20px',marginBottom:'20px'}}>
<h3 style={{marginTop:'15px',fontWeight:'700',color:'#3c77c9',lineHeight:'1',marginBottom:'10px'}}>Book Your Deal Now</h3>
<hr style={{marginTop:'5px',marginBottom:'5px',width:'100%'}}/>

<div style={{marginBottom:'10px'}}>
<div class="row">
<div class="col-lg-4 col-md-4 col-xs-12">
<div style={{textAlign:'center'}}>
<img src="images/cruise1.jpg" class="img-fluid" style={{width:'auto',height:'auto',borderRadius:'1%',marginBottom:'10px'}} alt="oyt"/>

<div class="col-lg-12">
<input id="image" name="image" type="text" class="form-control" value="images/cruise1.jpg" aria-required="true" aria-invalid="false" hidden />
</div>
</div>
</div>
<div class="col-lg-8 col-md-8 col-xs-12">
<div style={{padding:'1px'}}>

<b style={{color:'#3c77c9',paddingLeft:'5px'}}>Cruise</b>
<div class="table-responsive" style={{padding:'5px'}}>
<table class="table" style={{border:'1px solid lightgrey'}}>
  <tbody>
    <tr>
      <td><b style={{color:'#3c77c9'}}>Total Cost</b></td>
      <td><b style={{color:'#ff3d00'}}>Rs. 5000/-</b></td>
    </tr>
		    <tr>
      <td>Total Days</td>
      <td>5</td>
    </tr>
		    <tr>
      <td>Arrival Date</td>
      <td>26 Jan 2024</td>
    </tr>
			    <tr>
      <td>Departure Date</td>
      <td>23 Jan 2024</td>
    </tr>


  </tbody>
</table>
</div>
</div>
</div>
</div>

<hr style={{marginTop:'5px',marginBottom:'5px',width:'100%'}}/>
</div>

 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Name</label>
<input type="name" name="name" class="form-control" id="name" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}} placeholder="Robert thomb"/>
</div>

<div class="row">
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Email</label>
<input type="email" name="email" class="form-control" id="email" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}} placeholder="e.g. abc@gmail.com"/>
</div>
</div>
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Phone</label>
<input type="number" name="phone" class="form-control" id="phone" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}} placeholder="+91 999999999"/>
</div>
</div>
</div>

<div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Address</label>
<input type="text" name="address" class="form-control" id="address" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}} />
</div>

<div class="row">
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Adult</label>
<select type="select" name="adult" class="form-control" id="adult" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}}>
<option>CHOOSE</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select>
</div>
</div>
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Child</label>
<select type="select" name="child" class="form-control" id="child" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}}>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select>
</div>
</div>
</div>

<div class="row">
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Gender</label>
<select type="select" name="gender" class="form-control" id="gender" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}}>
<option>CHOOSE</option>
<option>Male</option>
<option>Female</option>
</select>
</div>
</div>
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Nationality</label>
<select type="select" name="nationality" class="form-control" id="nationality" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}}>
<option>Indian</option>
<option>American</option>
<option>Other</option>
</select>
</div>
</div>
</div>

<br/>

 <div><button type="submit" name="submit" value="submit" class="btn btn-danger" 
 style={{fontSize: '14px',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    borderRadius: '15px 0 15px 0'}}>Book Submission / Proceed To Checkout</button></div>
</div>
</form>


</div>
<div class="col-lg-4 col-md-4 col-xs-12">

{/* <!-- ------- Start card 1----------> */}
<div class="card rounded shadow" style={{marginBottom:'20px'}}>

<b style={{textAlign:'center',color:'#3c77c9',padding:'5px 5px',marginTop:'10px'}}>Popular Packages</b>
<hr style={{marginTop:'5px',marginBottom:'5px',width:'100%'}}/>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div>
<img src="images/k1.jpg" class="img-fluid" alt="oyt"/>
<div style={{float:'right',position:'relative',marginTop:'-20px',backgroundColor:'#fff',padding:'2px'}}><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i></div>
<div style={{padding:'7px 10px'}}>
<h4 style={{marginTop:'10px',fontWeight:'700',color:'#3c77c9',lineHeight:'1',marginBottom:'10px'}}>Royal Cruises</h4>
<hr style={{marginTop:'5px',marginBottom:'5px',width:'50%'}}/>
<p style={{color:'#837d7d',fontFamily:'revert',marginTop:'10px',fontSize:'14px',fontWeight:'500'}}><i class="fa fa-clock-o" aria-hidden="true"></i> 2 days starts from <b style={{color:'#ff3d00',fontSize:'18px'}}>Rs. 2000/-</b></p>
<div style={{textAlign:'center'}}>
    <button type="submit" class="btn btn-primary" style={{fontSize: '14px',
	marginTop:'10px',
    lineHeight: '1',
    border: '2px solid #3c77c9',
    backgroundColor: '#3c77c9',
    margin:'2px',
    borderRadius: '7px'}}>See More</button>
        <button type="submit" class="btn btn-danger" style={{fontSize: '14px',
	marginTop:'10px',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    margin:'2px',
    borderRadius: '7px'}}>Book now</button>
</div>
</div>
</div>	  
    </div>
    
    <div class="carousel-item">
<div>
<img src="images/k2.jpg" class="img-fluid" alt="oyt"/>
<div style={{float:'right',position:'relative',marginTop:'-20px',backgroundColor:'#fff',padding:'2px'}}><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i></div>
<div style={{padding:'7px 10px'}}>
<h4 style={{marginTop:'10px',fontWeight:'700',color:'#3c77c9',lineHeight:'1',marginBottom:'10px'}}>Royal Cruises</h4>
<hr style={{marginTop:'5px',marginBottom:'5px',width:'50%'}}/>
<p style={{color:'#837d7d',fontFamily:'revert',marginTop:'10px',fontSize:'14px',fontWeight:'500'}}><i class="fa fa-clock-o" aria-hidden="true"></i> 2 days starts from <b style={{color:'#ff3d00',fontSize:'18px'}}>Rs. 2000/-</b></p>
<div style={{textAlign:'center'}}>
    <button type="submit" class="btn btn-primary" style={{fontSize: '14px',
	marginTop:'10px',
    lineHeight: '1',
    border: '2px solid #3c77c9',
    backgroundColor: '#3c77c9',
    margin:'2px',
    borderRadius: '7px'}}>See More</button>
        <button type="submit" class="btn btn-danger" style={{fontSize: '14px',
	marginTop:'10px',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    margin:'2px',
    borderRadius: '7px'}}>Book now</button>
</div>
</div>
</div>
    </div>
    <div class="carousel-item">
<div>
<img src="images/k3.jpg" class="img-fluid" alt="oyt"/>
<div style={{float:'right',position:'relative',marginTop:'-20px',backgroundColor:'#fff',padding:'2px'}}><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i></div>
<div style={{padding:'7px 10px'}}>
<h4 style={{marginTop:'10px',fontWeight:'700',color:'#3c77c9',lineHeight:'1',marginBottom:'10px'}}>Royal Cruises</h4>
<hr style={{marginTop:'5px',marginBottom:'5px',width:'50%'}}/>
<p style={{color:'#837d7d',fontFamily:'revert',marginTop:'10px',fontSize:'14px',fontWeight:'500'}}><i class="fa fa-clock-o" aria-hidden="true"></i> 2 days starts from <b style={{color:'#ff3d00',fontSize:'18px'}}>Rs. 2000/-</b></p>
<div style={{textAlign:'center'}}>
    <button type="submit" class="btn btn-primary" style={{fontSize: '14px',
	marginTop:'10px',
    lineHeight: '1',
    border: '2px solid #3c77c9',
    backgroundColor: '#3c77c9',
    margin:'2px',
    borderRadius: '7px'}}>See More</button>
        <button type="submit" class="btn btn-danger" style={{fontSize: '14px',
	marginTop:'10px',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    margin:'2px',
    borderRadius: '7px'}}>Book now</button>
</div>
</div>
</div>
    </div>
  </div>
</div>
 <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only" style={{padding:'5px'}}>Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

</div>
{/* <!-- ------- End card 1 ----------> */}

{/* <!-- ------- Start card 2----------> */}
<div class="card" style={{marginBottom:'20px'}}>
<div class="imgg1">
  <img src="images/slider1.jpg" alt="oyt" style={{width:'100%',minHeight:'200px'}}/>
  <div class="top-left">
<b style={{color:'#fff'}}>Any Questions ?</b>
<p style={{padding:'10px',color:'#fff',fontFamily:'revert',marginTop:'5px',fontSize:'14px',fontWeight:'500'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus enim felis, egestas a dolor et, convallis aliquam.</p>
<i class="fa fa-phone" style={{fontSize:'20px',fontWeight:'400',color:'#fff',padding:'5px',borderRadius:'50%',margin:'5px'}}></i><a href="#" style={{color:'#fff',fontSize:'14px'}}>+91 999999999</a>
<i class="fa fa-envelope" style={{fontSize:'20px',fontWeight:'400',color:'#fff',padding:'5px',borderRadius:'50%',margin:'5px'}}></i><a href="#" style={{color:'#fff',fontSize:'14px'}}>feedback@oyt.com</a>
<br/>

</div>
</div>
</div>
{/* <!-- ------- End card 2 ----------> */}


{/* <!-- ------- Start card 3----------> */}
<div class="card" style={{marginBottom:'20px'}}>
<div style={{padding:'10px 15px',backgroundColor:'#f5f5f5'}}>
<b style={{fontSize:'16px',color:'#3c77c9',margin:'5px'}}>Flicker &nbsp;</b>
<hr style={{marginTop:'5px'}} />

<a href="images/k3.jpg" target="_blank"><img src="images/k3.jpg" class="img-fluid" style={{margin:'5px',width:'80px',height:'80px',borderRadius:'20%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt"/></a>
<a href="images/k3.jpg" target="_blank"><img src="images/k3.jpg" class="img-fluid" style={{margin:'5px',width:'80px',height:'80px',borderRadius:'20%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt"/></a>
<a href="images/k3.jpg" target="_blank"><img src="images/k3.jpg" class="img-fluid" style={{margin:'5px',width:'80px',height:'80px',borderRadius:'20%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt"/></a>

</div>
</div>
{/* <!-- ------- End card 3 ----------> */}

</div>


</div>
</div>


{/* <!-- --------------------------------------------- Body END ------------------- --> */}
   
           
        </>
    );
}

export default Cruisebookingform;