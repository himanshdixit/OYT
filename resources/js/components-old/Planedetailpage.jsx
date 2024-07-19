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

import b11 from '/public/images/pagebanners/planepc.jpg';
import b12 from '/public/images/pagebanners/planemb.jpg';

const Planedetailpage=()=>{

    // Get ID from URL
    const params = useParams();
        
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get(`/api/planedetails/`+params.id)
        .then(res => {
            console.log(res)
            // console.log(res.data.data[0].name)
            setPosts(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [params.id])

        // console.log(params.id);
        // console.log(posts);

        const capitalizeWords = (str) => {
          return str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        };
      
        const [data, setData] = useState([])
      
        useEffect(()=> {
            axios.get(`/api/planes/`)
            .then(res => {
                //console.log(res)
                //console.log(res.data.data[0].name)
                //console.log(res.data)
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
<b style={{ padding:'10px' }}> <Link to={'/'}> Home </Link> / <Link to={'/planelist/'}> Listing </Link> </b>  
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
      <img src={'/uploads/plane/'+item.photo} class="d-block w-100" alt="oyt"/>
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
          <a id="home2-tab" data-toggle="tab" href="#home2" role="tab" aria-controls="home2" aria-selected="true" class="nav-link  mr-sm-3  active" style={{border:'1px solid lightgrey',padding: '0.1rem 0.7rem',margin:'3px'}}>Description</a>
        </li>
        <li class="nav-item flex-sm-fill">
          <a id="profile2-tab" data-toggle="tab" href="#profile2" role="tab" aria-controls="profile2" aria-selected="false" class="nav-link  mr-sm-3 " style={{border:'1px solid lightgrey',padding: '0.1rem 0.7rem',margin:'3px'}}>Pilot & Type</a>
        </li>
        <li class="nav-item flex-sm-fill">
          <a id="contact2-tab" data-toggle="tab" href="#contact2" role="tab" aria-controls="contact2" aria-selected="false" class="nav-link  " style={{border:'1px solid lightgrey',padding: '0.1rem 0.7rem',margin:'3px'}}>Highlights</a>
        </li>
        <li class="nav-item flex-sm-fill">
          <a id="contact3-tab" data-toggle="tab" href="#contact3" role="tab" aria-controls="contact3" aria-selected="false" class="nav-link  " style={{border:'1px solid lightgrey',padding: '0.1rem 0.7rem',margin:'3px'}}>Policy</a>
        </li>
      </ul>


    <div class="p-3 bg-white rounded shadow mb-3">
      {/* <!-- Lined tabs--> */}
      
      {
posts.map((item, index)=>

      <div id="myTab2Content" class="tab-content">

<div id="home2" role="tabpanel" aria-labelledby="home-tab" class="tab-pane fade px-2 py-2 show active">
        <p align="justify" dangerouslySetInnerHTML={{__html: item.des}}></p>
		</div>
        <div id="profile2" role="tabpanel" aria-labelledby="profile-tab" class="tab-pane fade px-2 py-2" >
        <b style={{color:'#ff3d00'}}>Pilot : { item.pilot }</b> <br/>
        <b style={{color:'#ff3d00'}}>Type : { item.type }</b> <br/>
        </div>
        <div id="contact2" role="tabpanel" aria-labelledby="contact-tab" class="tab-pane fade px-2 py-2">
        <p align="justify" dangerouslySetInnerHTML={{__html: item.highlights}}></p>
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

{/* <!-- ------- Start card 1----------> */}
<div class="card rounded shadow" style={{marginBottom:'20px'}}>

<b style={{textAlign:'center',color:'#3c77c9',padding:'5px 5px',marginTop:'10px'}}>Popular Packages</b>
<hr style={{marginTop:'5px',marginBottom:'5px',width:'100%'}}/>

<div style={{ marginTop:'35px'}}>
<div class="uk-slider-container" uk-slider="autoplay: true;autoplay-interval: 6000;pause-on-hover: true">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-1@s uk-child-width-1-1@m uk-grid">
            
        {
    data.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/planedetailpage/' + item.id}> <img src={'/uploads/plane/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/planedetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
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

{/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div>
<img src={k1} class="img-fluid" alt="oyt"/>
<div style={{float:'right',position:'relative',marginTop:'-20px',backgroundColor:'#fff',padding:'2px'}}><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i></div>
<div style={{padding:'7px 10px'}}>
<h4 style={{marginTop:'10px',fontWeight:'700',color:'#3c77c9',lineHeight:'1',marginBottom:'10px'}}>Charted Planes</h4>
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
<img src={k2} class="img-fluid" alt="oyt"/>
<div style={{float:'right',position:'relative',marginTop:'-20px',backgroundColor:'#fff',padding:'2px'}}><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i></div>
<div style={{padding:'7px 10px'}}>
<h4 style={{marginTop:'10px',fontWeight:'700',color:'#3c77c9',lineHeight:'1',marginBottom:'10px'}}>Charted Planes</h4>
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
<img src={k3} class="img-fluid" alt="oyt"/>
<div style={{float:'right',position:'relative',marginTop:'-20px',backgroundColor:'#fff',padding:'2px'}}><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i></div>
<div style={{padding:'7px 10px'}}>
<h4 style={{marginTop:'10px',fontWeight:'700',color:'#3c77c9',lineHeight:'1',marginBottom:'10px'}}>Charted Planes</h4>
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
  </a> */}

</div>
{/* <!-- ------- End card 1 ----------> */}

<div class="card" style={{marginBottom:'20px',backgroundColor:'#fbfbfb'}}>
<b style={{textAlign:'center',color:'#3c77c9',padding:'5px 5px',marginTop:'10px'}}>Booking Here <i class="fa fa-smile-o" style={{color:'#ff3d00'}} aria-hidden="true"></i> </b>
<hr style={{marginTop:'5px',marginBottom:'5px',width:'100%'}}/>
<div style={{padding:'10px'}}>
<form action="{{ url('Charted Planes_booking_form') }}" name="Charted PlanesbookingForm" method="post" onsubmit="return validateform()" enctype="multipart/form-data" class="info-box">

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


<div class="row">
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px'}}>Adult</label>
<select type="select" name="adult" class="form-control" id="adult" style={{fontSize:'14px'}}>
<option value="1">01</option>
<option value="2">02</option>
<option value="3">03</option>
<option value="4">04</option>
<option value="5">05</option>
</select>
</div>
</div>
<div class="col-6">
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


<div class="row">
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px'}}>From</label>
<select type="select" name="from_location" class="form-control" id="from_location" style={{fontSize:'14px'}}>
<option value="Delhi">Delhi</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Maharastra">Maharastra</option>
<option value="Kerla">Kerla</option>
<option value="Haryana">Haryana</option>
<option value="Other">Other</option>
</select>
</div>
</div>
<div class="col-6">
 <div class="form-group">
<label style={{fontSize:'14px'}}>To</label>
<select type="select" name="to_location" class="form-control" id="to_location" style={{fontSize:'14px'}}>
<option value="Delhi">Delhi</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Maharastra">Maharastra</option>
<option value="Kerla">Kerla</option>
<option value="Haryana">Haryana</option>
<option value="Other">Other</option>
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

export default Planedetailpage;