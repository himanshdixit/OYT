import React from 'react';

const Conatct=()=>{
    return(
        <>

<img src="images/pagebanners/contactus.jpg" class="img-fluid" style={{width:'100%'}} alt="oyt"/>

<div class="container">
<div style={{textAlign:'center'}}>
<h1 style={{color:'#3c77c9',marginTop:'20px'}}>&nbsp; Get In Touch &nbsp;</h1>
<div class="line" style={{backgroundColor:'#ff3d00'}}></div>
</div>
<div class="row">
<div class="col-lg-7 col-md-7 col-xs-12">


<form action="{{ url('contact_form') }}" name="contactForm" method="post" onsubmit="return validateform()" class="info-box">

              <input type="hidden" name="created_at" value="<?php echo $created_at; ?>" class="form-control" readonly />

            	<div class="form-row">
                <div class="col form-group">
				<label style={{ color: '#3c77c9',fontWeight:'700'}}>Name :</label>
                <input type="text" name="name" class="form-control" id="name" placeholder="" value="" />
                </div>
               
              </div>
              <div class="form-row">
			   <div class="col form-group">
				<label style={{ color: '#3c77c9',fontWeight:'700'}}>Email :</label>
                  <input type="email" class="form-control" name="email" id="email" placeholder="" value=""/>
                </div>
                <div class="col form-group">
				<label style={{ color: '#3c77c9',fontWeight:'700'}}>Phone :</label>
                  <input type="number" name="phone" class="form-control" id="phone" placeholder="" value=""/>
                </div>
              </div>
<div class="form-row">
                <div class="col form-group">
				<label style={{ color: '#3c77c9',fontWeight:'700'}}>Subject :</label>
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="" value="" />
                </div>
</div>
              <div class="form-group">
			  <label style={{ color: '#3c77c9',fontWeight:'700'}}>Message :</label>
                <textarea class="form-control" name="message" rows="5" placeholder="Write here..."></textarea>
                
            </div>


 <div style={{textAlign:'center'}}><button type="submit" class="btn btn-primary" style={{
    fontSize: '14px',
    marginLeft: '5px',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    borderRadius: '15px 0 15px 0'}}>SEND MESSAGE</button></div>

            </form>
</div>
<div class="col-lg-5 col-md-5 col-xs-12">
<div style={{textAlign:'center'}}>
<img src="images/logo.png" class="img-fluid" style={{textAlign:'center',marginTop:'20px'}} alt="oyt"/>
</div>
<i class="fa fa-map-marker" style={{fontSize:'20px',fontWeight:'400',color:'#ff3d00',padding:'5px',borderRadius:'50%',margin:'5px'}}></i><a href="#" style={{color:'#837d7d',fontSize:'14px'}}>Plot no. 20 , North America , pin - 201452</a>
<br/>
<i class="fa fa-phone" style={{fontSize:'20px',fontWeight:'400',color:'#ff3d00',padding:'5px',borderRadius:'50%',margin:'5px'}}></i><a href="#" style={{color:'#837d7d',fontSize:'14px'}}>+91 999999999</a>
<br/>
<i class="fa fa-envelope" style={{fontSize:'20px',fontWeight:'400',color:'#ff3d00',padding:'5px',borderRadius:'50%',margin:'5px'}}></i><a href="#" style={{color:'#837d7d',fontSize:'14px'}}>feedback@oyt.com</a>
<br/>
<br/>
<div>
<a href="#"><i class="fa fa-youtube" style={{fontSize:'25px',fontWeight:'400',backgroundColor:'#fff',color:'#3c77c9',padding:'8px',borderRadius:'50%',margin:'3px' }}></i></a>
<a href="#"><i class="fa fa-instagram" style={{fontSize:'25px',fontWeight:'400',backgroundColor:'#fff',color:'#3c77c9',padding:'8px',borderRadius:'50%',margin:'3px' }}></i></a>
<a href="#"><i class="fa fa-linkedin" style={{fontSize:'25px',fontWeight:'400',backgroundColor:'#fff',color:'#3c77c9',padding:'8px',borderRadius:'50%',margin:'3px' }}></i></a>
<a href="#"><i class="fa fa-pinterest" style={{fontSize:'25px',fontWeight:'400',backgroundColor:'#fff',color:'#3c77c9',padding:'8px',borderRadius:'50%',margin:'3px' }}></i></a>
<a href="#"><i class="fa fa-twitter" style={{fontSize:'25px',fontWeight:'400',backgroundColor:'#fff',color:'#3c77c9',padding:'8px',borderRadius:'50%',margin:'3px' }}></i></a>
<a href="#"><i class="fa fa-facebook-square" style={{fontSize:'25px',fontWeight:'400',backgroundColor:'#fff',color:'#3c77c9',padding:'8px',borderRadius:'50%',margin:'3px' }}></i></a>
</div>

</div>
</div>
</div>


<br/>
<br/>

        </>
    );
}

export default Conatct;