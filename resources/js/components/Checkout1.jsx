import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import checkb from '/public/images/pagebanners/booking.jpg';
import s1 from '/public/images/slider1.jpg';
import k3 from '/public/images/k3.jpg';
import k2 from '/public/images/k2.jpg';
import k1 from '/public/images/k1.jpg';

const Checkout=()=>{

const location = useLocation();
const data = location.state;
console.log(data);
console.log(data.id);

const getTotal = () => {
    let Price = Number(posts[0].price);
    let GST= Price * (18/100);
    let fee = 50;
    let totalPrice=0;
    totalPrice = Price + GST + fee;
    //console.log(totalPrice);
    return {totalPrice,GST}
  }
const nav = useNavigate();

// const handleSubmit2= async (e)=>{
//   e.preventDefault();
//   await nav("/payment/"+ getTotal().totalPrice , {state:data});
// }  

const handleSubmit2= async (e)=>{
  e.preventDefault();
  if(localStorage.getItem('user-info')){
    await nav("/payment/"+ getTotal().totalPrice , {state:data});
  }else{
    // window.location.reload(true);
    nav("/signup/"+getTotal().totalPrice, {state:data});
  }
}  

const [posts, setPosts] = useState([])

useEffect(()=> {
    axios.get(`/api/hoteldetails/`+data.hotel_id)
    .then(res => {
        console.log(res)
        // console.log(res.data.blog[0].name)
        setPosts(res.data.data)
    })
    .catch(err =>{
        console.log(err)
    })
}, [data.hotel_id])


//console.log(posts[0].price);

    return(
        <>

{/* <!-- --------------------------------------------- Body Start ------------------- --> */}


<img src={checkb} class="img-fluid" style={{width:'100%'}} alt="oyt"/>

<div class="container">
<div class="row" style={{marginTop:'20px'}}>

<div class="col-lg-8 col-md-8 col-xs-12">

<form onSubmit={handleSubmit2} class="info-box">

<div class="card rounded shadow" style={{padding:'11px 20px',marginBottom:'20px'}}>
<h3 style={{marginTop:'15px',fontWeight:'700',color:'#3c77c9',lineHeight:'1',marginBottom:'10px'}}>Checkout Page</h3>
<hr style={{marginTop:'5px',marginBottom:'5px',width:'100%'}}/>

{ 
posts.map((item)=>
<div style={{marginBottom:'10px'}}>
<div class="row">
<div class="col-lg-4 col-md-4 col-xs-12">
<div style={{textAlign:'center'}}>
<img src={'/uploads/hotels/'+item.photo} class="img-fluid" style={{width:'auto',height:'auto',borderRadius:'1%',marginBottom:'10px'}} alt="oyt"/>

<div class="col-lg-12">
<input id="image" name="image" type="text" class="form-control" value="images/cruise1.jpg" aria-required="true" aria-invalid="false" hidden />
</div>
</div>
</div>
<div class="col-lg-8 col-md-8 col-xs-12">
<div style={{padding:'1px'}}>

<div class="table-responsive" style={{padding:'5px'}}>
<b style={{color:'#3c77c9',paddingLeft:'5px'}}>{item.name}</b>
<br/>
<table class="table" style={{border:'1px solid lightgrey'}}>
  <tbody>
    <tr>
      <td>Cost</td>
      <td>Rs. {item.price}/-</td>
    </tr>
		    <tr>
      <td>GST (18%) </td>
      <td>Rs. {getTotal().GST}/-</td>
    </tr>
			    <tr>
      <td>Convenience Fee</td>
      <td>Rs. 50/-</td>
    </tr>
    <tr>
      <td><b style={{color:'#3c77c9'}}>Total Cost</b></td>
      <td><b style={{color:'#ff3d00'}}>Rs. {getTotal().totalPrice}/-</b></td>
    </tr>

  </tbody>
</table>
</div>



</div>
</div>
</div>

<hr style={{marginTop:'5px',marginBottom:'5px',width:'100%'}}/>
</div>
)}

 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Name</label>
<input type="name" name="name" class="form-control" id="name" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}} value={data.name} readOnly/>
</div>

<div class="row">
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Email</label>
<input type="email" name="email" class="form-control" id="email" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}} value={data.email} readOnly/>
</div>
</div>
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Phone</label>
<input type="number" name="phone" class="form-control" id="phone" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}} value={data.phone} readOnly/>
</div>
</div>
</div>

<div class="row">
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Adult</label>
<select type="select" name="adult" class="form-control" id="adult" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}} readOnly>
<option value={data.adult} readOnly>{data.adult}</option>
</select>
</div>
</div>
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Child</label>
<select type="select" name="child" class="form-control" id="child" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}} readOnly>
<option value={data.child}>{data.child}</option>
</select>
</div>
</div>
</div>

<div class="row">
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px',color:'#777272',fontWeight:'600'}}>Gender</label>
<select type="select" name="gender" class="form-control" id="gender" style={{width:'100%',borderRadius:'5px',fontSize:'14px'}} readOnly>
<option value={data.gender}>{data.gender}</option>
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

 <div>
  <button type="submit" name="submit" value="submit" class="btn btn-primary" 
 style={{fontSize: '14px',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    borderRadius: '5px'}}>Review and Confirm</button>
    
    </div>
</div>
</form>

{/* <Link to={'/payment/'+500} style={{float:'right',color:'#3c77c9',fontWeight:'600'}}>view details <i class="fa fa-angle-double-right" aria-hidden="true"></i></Link> */}

{/* <p>{props.data} </p>  */}

</div>
<div class="col-lg-4 col-md-4 col-xs-12">


{/* <!-- ------- Start card 2----------> */}
<div class="card" style={{marginBottom:'20px'}}>
<div class="imgg1">
  <img src={s1} alt="oyt" style={{width:'100%',minHeight:'200px'}}/>
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

<a href="images/k3.jpg" target="_blank"><img src={k3} class="img-fluid" style={{margin:'5px',width:'80px',height:'80px',borderRadius:'20%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt"/></a>
<a href="images/k3.jpg" target="_blank"><img src={k3} class="img-fluid" style={{margin:'5px',width:'80px',height:'80px',borderRadius:'20%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt"/></a>
<a href="images/k3.jpg" target="_blank"><img src={k3} class="img-fluid" style={{margin:'5px',width:'80px',height:'80px',borderRadius:'20%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt"/></a>

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

export default Checkout;