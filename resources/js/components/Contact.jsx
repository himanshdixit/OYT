import React, { useState } from 'react'
import axios from 'axios';

const Conatct=()=>{

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
    name:'',
    email:'',
    phone:'',
    sub:'',
    des:'',
    created_at:currentDate
  });
  
  const handleInput=(e)=>{
      setInputValue({...inputValue, [e.target.name] : e.target.value});
  }
  
  const handleSubmit= async (e)=>{
      e.preventDefault();
      console.log(inputValue);
      // console.log(inputValue.name);
      // const url="http://localhost:8000/api/insert";
      const url="http://oyt.travel/api/insert";
      const res = await axios.post(url,inputValue)
      .then( resp => { console.log(resp); alert("Data Submitted successfully... Thank you !!");  window.location.reload(true);} )
      .catch( err => console.log(err) );
  }
  
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

{/* <b>{currentDate}</b> */}

<form onSubmit={handleSubmit} class="info-box">

            	<div class="form-row">
                <div class="col form-group">
				<label style={{ color: '#3c77c9',fontWeight:'700'}}>Name :</label>
                <input type="text" name="name" class="form-control" id="name" placeholder="" value={inputValue.name} onChange={handleInput} />
                </div>
               
              </div>
              <div class="form-row">
			   <div class="col form-group">
				<label style={{ color: '#3c77c9',fontWeight:'700'}}>Email :</label>
                  <input type="email" class="form-control" name="email" id="email" placeholder="" value={inputValue.email} onChange={handleInput} />
                </div>
                <div class="col form-group">
				<label style={{ color: '#3c77c9',fontWeight:'700'}}>Phone :</label>
                  <input type="number" name="phone" class="form-control" id="phone" placeholder="" value={inputValue.phone} onChange={handleInput} />
                </div>
              </div>
<div class="form-row">
                <div class="col form-group">
				<label style={{ color: '#3c77c9',fontWeight:'700'}}>Subject :</label>
                  <input type="text" class="form-control" name="sub" id="sub" placeholder="" value={inputValue.sub} onChange={handleInput} />
                </div>
</div>
              <div class="form-group">
			  <label style={{ color: '#3c77c9',fontWeight:'700'}}>Message :</label>
                <textarea class="form-control" name="des" rows="5" placeholder="Write here..." value={inputValue.des} onChange={handleInput}></textarea>
                
            </div>


 <div style={{textAlign:'center'}}><button type="submit" class="btn btn-primary" style={{
    fontSize: '14px',
    marginLeft: '5px',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    borderRadius: '15px 0 15px 0'}}>SEND</button></div>

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