import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

import banner1 from '/public/images/banner1.jpg';
import banner2 from '/public/images/banner2.jpg';
import banner3 from '/public/images/banner3.jpg';
import k1 from '/public/images/k1.jpg';
import k2 from '/public/images/k2.jpg';
import k3 from '/public/images/k3.jpg';
import k4 from '/public/images/k4.jpg';

import s1 from '/public/images/slider1.jpg';

import b11 from '/public/images/pagebanners/hotelpc.jpg';
import b12 from '/public/images/pagebanners/hotelmb.jpg';

const Hoteldetailpage=()=>{

    // Get ID from URL
    const params = useParams();
        
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get(`/api/hoteldetails/`+params.id)
        .then(res => {
            console.log(res)
            // console.log(res.data.data[0].name)
            setPosts(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [params.id])

        console.log(params.id);
        console.log(posts);

        const capitalizeWords = (str) => {
          return str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        };
      
        const [data, setData] = useState([])
      
        useEffect(()=> {
            axios.get(`/api/hotels/`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }, [])

    return(
        <>

{/* <!-- --------------------------------------------- Body Start ------------------- --> */}


{/* <div className='deskContent'>
<img src={b11} class="img-fluid" style={{width:'100%',marginTop:'70px'}} alt="oyt" />
</div>
<div className='phoneContent'>
<img src={b12} class="img-fluid" style={{width:'100%'}} alt="oyt" />
</div> */}

<div className='deskContent'>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>

<div class="container">
<div style={{backgroundColor: 'rgb(245, 245, 245)',border: '1px solid lightgrey',paddingTop:'10px',paddingBottom:'10px'}}>
<b style={{ padding:'10px' }}> <Link to={'/'}> Home </Link> / <Link to={'/hotellist/'}> Listing </Link> </b>  
</div>
</div>


<div class="container">

<div class="row" style={{marginTop:'20px'}}>

<div class="col-lg-8 col-md-8 col-xs-12">
{ 
posts.map((item)=>
<div class="card-header"><b>{item.name} &nbsp;&nbsp; <br/><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i></b>
<div style={{float:'right',borderLeft:'1px solid lightgrey'}}><b style={{color:'#3c77c9',marginLeft:'10px'}}>Share &nbsp;&nbsp; <i class="fa fa-envelope" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-facebook" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-twitter" style={{color:'#ff3d00',margin:'2px'}}></i></b></div>
</div>
)}
<br/>


<div id="carouselExampleIndicators11" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators11" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators11" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators11" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
  { 
posts.map((item)=>
    <div class="carousel-item active">
      <img src={'/uploads/hotels/'+item.photo} class="d-block w-100" alt="oyt"/>
    </div>
    )
}
    {/* <div class="carousel-item">
      <img src={banner2} class="d-block w-100" alt="oyt"/>
    </div>
    <div class="carousel-item">
      <img src={banner3} class="d-block w-100" alt="oyt"/>
    </div> */}

  </div>
</div>

<br/>


<div >


<ul id="myTab2" role="tablist" class="nav nav-tabs nav-pills with-arrow lined flex-sm-row text-center">
        <li class="nav-item flex-sm-fill">
          <a id="home2-tab" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true" class="nav-link  mr-sm-3  active" style={{border:'1px solid lightgrey',padding: '0.1rem 0.7rem',margin:'3px'}}>Overview</a>
        </li>
        <li class="nav-item flex-sm-fill">
          <a id="profile2-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile2" aria-selected="false" class="nav-link  mr-sm-3 " style={{border:'1px solid lightgrey',padding: '0.1rem 0.7rem',margin:'3px'}}>Amenties</a>
        </li>
        <li class="nav-item flex-sm-fill">
          <a id="contact2-tab" data-toggle="tab" href="#contact2" role="tab" aria-controls="contact2" aria-selected="false" class="nav-link  " style={{border:'1px solid lightgrey',padding: '0.1rem 0.7rem',margin:'3px'}}>Heighlights</a>
        </li>
        <li class="nav-item flex-sm-fill">
          <a id="contact3-tab" data-toggle="tab" href="#contact3" role="tab" aria-controls="contact3" aria-selected="false" class="nav-link  " style={{border:'1px solid lightgrey',padding: '0.1rem 0.7rem',margin:'3px'}}>Policies</a>
        </li>
      </ul>


    <div class="p-3 bg-white rounded shadow mb-3">
      {/* <!-- Lined tabs--> */}
      
      {
posts.map((item, index)=>

      <div id="myTab2Content" class="tab-content">

<div id="home2" role="tabpanel" aria-labelledby="home-tab" class="tab-pane fade px-2 py-2 show active">
        <p align="justify" dangerouslySetInnerHTML={{__html: item.overview}}></p>
        <b style={{color:'#ff3d00'}}>Room Type : { item.rooms }</b>
		</div>
        <div id="profile2" role="tabpanel" aria-labelledby="profile-tab" class="tab-pane fade px-2 py-2" >
        <p align="justify">
			<b style={{color:'#3c77c9'}}>Basic Facilities : &nbsp;</b>
			<i class="fa fa-wifi" style={{color:'#ff3d00'}}></i>&nbsp; Free Wifi &nbsp;
<i class="fa fa-product-hunt" style={{color:'#ff3d00'}}></i> &nbsp; Free Parking &nbsp;
<i class="fa fa-id-card" style={{color:'#ff3d00'}}></i> &nbsp; Free Key card Access &nbsp;
<i class="fa fa-random" style={{color:'#ff3d00'}}></i> &nbsp; Free Air conditioning &nbsp;
<br/><br/>
<i class="fa fa-cutlery" style={{color:'#ff3d00'}}></i> &nbsp; Breakfast included &nbsp;
			</p>
<br/>
      <b style={{color:'#3c77c9'}}>Specific Amenties : &nbsp;</b>
        <p align="justify" dangerouslySetInnerHTML={{__html: item.amenties}} ></p>
        </div>
        <div id="contact2" role="tabpanel" aria-labelledby="contact-tab" class="tab-pane fade px-2 py-2">
        <p align="justify" dangerouslySetInnerHTML={{__html: item.heighlights}}></p>
        </div>
        <div id="contact3" role="tabpanel" aria-labelledby="contact-tab" class="tab-pane fade px-2 py-2">
        <p align="justify" dangerouslySetInnerHTML={{__html: item.policy}}></p>
        </div>

      {/* <!-- End lined tabs --> */}

      </div>

      )
}

	  
	  </div>
	  </div>

	  

</div>
<div class="col-lg-4 col-md-4 col-xs-12">
<div class="" style={{marginBottom:'20px',backgroundColor:'#fbfbfb'}}>
<div class="card">
<div class="card-header">
<p style={{fontWeight:'500'}}><i class="fa fa-map-marker" style={{color:'red'}}></i> &nbsp; Delhi NCR </p> 
</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.120212764419!2d77.36765251446462!3d28.566152693834276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f2fa697fad%3A0x26e338c34c82ba35!2sShiv%20Mandir%20Barola%20Sec%2049!5e0!3m2!1sen!2sin!4v1599210740927!5m2!1sen!2sin" width="100%" height="300" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
</div>
<p style={{fontWeight:'600',fontSize:'14px',padding:'15px',backgroundColor:'#ff3d00',color:'#fff'}}>Price From <b style={{fontSize:'18px',fontWeight:'600'}}>Rs. 5000/-</b> per night</p>

<hr/>

<div style={{ marginTop:'5px'}}>
<div class="uk-slider-container" uk-slider="autoplay: true;autoplay-interval: 6000;pause-on-hover: true">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-1@s uk-child-width-1-1@m uk-grid">
            
        {
    data.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/hoteldetailpage/' + item.id}> <img src={'/uploads/hotels/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/hoteldetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. { item.price }/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}
            
     
            {/* <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/caravan1.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Caravan</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li> */}        
                  
                       						
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>

<b style={{textAlign:'center',color:'#3c77c9',padding:'5px 5px',marginTop:'10px'}}>Booking Here <i class="fa fa-smile-o" style={{color:'#ff3d00'}} aria-hidden="true"></i> </b>
<hr style={{marginTop:'5px',marginBottom:'5px',width:'100%'}}/>
<div style={{padding:'10px'}}>
<form action="{{ url('OYT Hotel_booking_form') }}" name="OYT HotelbookingForm" method="post" onsubmit="return validateform()" enctype="multipart/form-data" class="info-box">

<input type="hidden" name="created_at" value="<?php echo $created_at; ?>" class="form-control" readonly />

<div class="col-12">
 <div class="form-group">
<label style={{fontSize:'14px'}}>Name</label>
<input type="name" name="name" class="form-control" id="name" style={{fontSize:'14px'}} />
</div>
</div>
<div class="col-12">
 <div class="form-group">
<label style={{fontSize:'14px'}}>Phone</label>
<input type="number" name="phone" class="form-control" id="phone" style={{fontSize:'14px'}} />
</div>
</div>
<div class="col-12">
 <div class="form-group">
<label style={{fontSize:'14px'}}>Email</label>
<input type="email" name="email" class="form-control" id="email" style={{fontSize:'14px'}} placeholder="e.g. abc@gmail.com" />
</div>
</div>
<div class="col-12">
 <div class="form-group">
<label style={{fontSize:'14px'}}>Gender</label>
<select type="select" name="gender" class="form-control" id="gender" style={{fontSize:'14px'}}>
<option value="male">Male</option>
<option value="female">Female</option>
<option value="other">Other</option>
</select>
</div>
</div>

<div class="col-12">
 <div class="form-group">
<label style={{fontSize:'14px'}}>Address</label>
<input type="text" name="address" class="form-control" id="address" style={{fontSize:'14px'}} />
</div>
</div>
<div class="row">
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px'}}>Check-in</label>
<input type="date" name="check_in" class="form-control" id="check_in" style={{fontSize:'14px'}} />
</div>
</div>
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px'}}>Check-out</label>
<input type="date" name="check_out" class="form-control" id="check_out" style={{fontSize:'14px'}} />
</div>
</div>
</div>
<p style={{marginTop:'1px',fontSize:'14px'}}>Lorem ipsm jcnej fcnds nce dshf cem fdcjhesd cnhe dhcd.</p>
<hr/>

<div class="row">
<div class="col-4">
 <div class="form-group">
<label style={{fontSize:'14px'}}>Rooms</label>
<select type="select" name="rooms" class="form-control" id="rooms" style={{fontSize:'14px'}}>
<option value="1">01</option>
<option value="2">02</option>
<option value="3">03</option>
<option value="4">04</option>
<option value="5">05</option>
</select>
</div>
</div>
<div class="col-4">
 <div class="form-group">
<label style={{fontSize:'14px'}}>Adults</label>
<select type="select" name="adult" class="form-control" id="adult" style={{fontSize:'14px'}}>
<option value="1">01</option>
<option value="2">02</option>
<option value="3">03</option>
<option value="4">04</option>
<option value="5">05</option>
</select>

</div>
</div>
<div class="col-4">
 <div class="form-group">
<label style={{fontSize:'14px'}}>Child</label>
<select type="select" name="child" class="form-control" id="child" style={{fontSize:'14px'}}>
<option value="1">01</option>
<option value="2">02</option>
<option value="3">03</option>
<option value="4">04</option>
<option value="5">05</option>
</select>

</div>
</div>
</div>

<hr style={{marginTop:'1px',marginBottom:'1px'}}/>
<h4 style={{fontSize:'16px',color:'#3c77c9',marginTop:'5px',fontWeight:'600'}}>Total Booking <b style={{float:'right',fontSize:'18px',color:'#ff3d00',fontWeight:'bolder'}}>Rs 5000 /-</b></h4>

<button class="btn btn-primary" name="submit" value="submit" type="submit" style={{fontSize:'14px',marginLeft:'5px',lineHeight:'1',border:'2px solid #ff3d00',backgroundColor:'#ff3d00',float:'right',borderRadius:'15px 0 15px 0'}}>Book Now</button>
</form>
</div>

</div>
</div>


</div>
</div>


{/* <!-- --------------------------------------------- Body END ------------------- --> */}
   
           
        </>
    );
}

export default Hoteldetailpage;