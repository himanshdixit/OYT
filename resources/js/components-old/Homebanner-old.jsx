import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

import k1 from '/public/images/k1.jpg';
import k2 from '/public/images/k2.jpg';
import k3 from '/public/images/k3.jpg';
import k4 from '/public/images/k4.jpg';

import icon1 from '/public/images/icons/icon1.png';
import icon2 from '/public/images/icons/icon2.png';
import icon3 from '/public/images/icons/icon3.png';
import icon4 from '/public/images/icons/icon4.png';

import bg2 from '/public/images/backgrounds/2.png';
import i1 from '/public/images/icons/1.png';
import i2 from '/public/images/icons/2.png';
import i3 from '/public/images/icons/3.png';
import i4 from '/public/images/icons/4.png';

import b1 from '/public/images/mbslider/1.jpg';
import b2 from '/public/images/mbslider/2.jpg';
import b3 from '/public/images/mbslider/3.jpg';


const Homebanner=()=>{

    const [data1, setData1] = useState([])
    useEffect(()=> {
        axios.get(`/api/hotels/`)
        .then(res => {
            //console.log(res)
            //console.log(res.data.data[0].name)
            //console.log(res.data)
            setData1(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, []) 


    const [data2, setData2] = useState([])
    useEffect(()=> {
        axios.get(`/api/cruises/`)
        .then(res => {
            //console.log(res)
            //console.log(res.data.data[0].name)
            //console.log(res.data)
            setData2(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])



    

    return (
        <>

{/* <!-- ------------------ start mobile home slider---------- --> */}



<div class="deskContent" style={{background:'url("images/slider1.jpg")',backgroundAttachment: 'fixed',backgroundOrigin: 'content-box',backgroundPosition: 'inherit',backgroundRepeat:'no-repeat',minHeight:'auto',marginTop:'90px  '}}>
<div class="container">
<div class="row" style={{paddingTop:'30px'}}>

<div class="col-lg-6 col-md-6 col-xs-12">
<div class="marginheadingtop">
<h1 style={{color:'#fff',fontFamily: 'Konkhmer Sleokchher  ',fontWeight: 'bolder  ',lineHeight: '41px  ',letterSpacing: '2px'}}><u style={{marginTop:'5px',color:'white'}}>EXPLORE</u> <br/> <b style={{color:'#fff'}}>THE</b> <b style={{color:'yellow'}}>WORLD</b> <b style={{color:'#fff'}}>TOGETHER</b> </h1>
<h4 style={{color:'#fff',marginTop:'5px',marginBottom:'15px'}}>Find awsome packages</h4>
<button style={{backgroundColor:'#fff',border:'2px solid #fff',color:'currentcolor',borderRadius:'5px',fontWeight: '900',fontSize: '15px',
padding: '3px 10px'}}><b>KNOW MORE</b></button>
</div>
</div>
<div class="col-lg-6 col-md-6 col-xs-12">

{/* <!-- ------------pc form start---------------- --> */}

<div class="deskContent" style={{margin:'60px 10px 88px 250px'}}>
<form style={{backgroundColor:'white',borderRadius:'10px'}}>

<div class="form-group">
<span style={{color:'red',fontSize:'11px',textAlign:'left',fontWeight:'bolder',marginLeft:'15px'}}>CATAGORY</span>
<select type="select" name="name" class="form-control" id="name" style={{border:'0',color:'darkgrey'}}>
<option>FLIGHTS</option>
<option>vdfv</option>
<option>vdfv</option>
</select>
</div>
<hr style={{marginTop: '2px  ',marginBottom: '2px  '}} />

<div class="form-group">
<span style={{color:'red',fontSize:'11px',textAlign:'left',fontWeight:'bolder',marginLeft:'15px'}}>FROM</span>
<select type="select" name="name" class="form-control" id="name" style={{border:'0',color:'darkgrey'}}>
<option>CHOOSE</option>
<option>vdfv</option>
<option>vdfv</option>
</select>
</div>
<hr style={{marginTop: '2px  ',marginBottom: '2px  '}} />
 <div class="form-group">
 <span style={{color:'red',fontSize:'11px',textAlign:'left',fontWeight:'bolder',marginLeft:'15px'}}>TO</span>
<select type="select" name="name" class="form-control" id="name" style={{border:'0',color:'darkgrey'}}>
<option>CHOOSE</option>
<option>vdfv</option>
<option>vdfv</option>
</select>
</div>
<hr style={{marginTop: '2px  ',marginBottom: '2px  '}} />
 <div class="form-group">
<span style={{color:'red',fontSize:'11px',textAlign:'left',fontWeight:'bolder',marginLeft:'15px'}}>DEPART</span>
<select type="select" name="name" class="form-control" id="name" style={{border:'0',color:'darkgrey'}}>
<option>CHOOSE</option>
<option>vdfv</option>
<option>vdfv</option>
</select>
</div>
<hr style={{marginTop: '2px  ',marginBottom: '2px  '}} />
 <div class="form-group">
<span style={{color:'red',fontSize:'11px',textAlign:'left',fontWeight:'bolder',marginLeft:'15px'}}>RETURN</span>
<select type="select" name="name" class="form-control" id="name" style={{border:'0',color:'darkgrey'}}>
<option>CHOOSE</option>
<option>vdfv</option>
<option>vdfv</option>
</select>
</div>
<button class="btn btn-primary tp1 txtpadding" style={{width:'100%',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px',padding:'7px 1px 7px 10p'}}>SEARCH <span class="tp2"><i class="fa fa-long-arrow-right"></i></span></button>


</form>
</div>
{/* <!-- ------------pc form END---------------- --> */}





</div>

</div>
</div>
<br/>
</div>




<div id="carouselExampleIndicators" class="carousel slide carousel-fade phoneContent" data-ride="carousel" style={{marginTop:'auto'}}>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={b1} alt="First slide" />
	  
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={b2} alt="Second slide" />

	  <div style={{position:'absolute',marginTop:'-80%',textAlign:'center',zIndex:'11'}}>
        <div class="text1">
			<h2 style={{color:'white  ',fontFamily: 'Konkhmer Sleokchher  ',fontWeight: 'bolder  ',lineHeight: '41px  ',letterSpacing: '2px'}}><u style={{marginTop:'5px'}}>EXPLORE</u> THE <b style={{color:'yellow'}}>WORLD</b> TOGETHER</h2>
        </div>
	  </div>

    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={b3} alt="Third slide" />
	  
	  <div style={{position:'absolute',marginTop:'-80%',textAlign:'center',zIndex:'11'}}>
		<div class="wrapper four">
        <div class="type">
			<h1 class="typing" style={{color:'white  ',fontFamily: 'Konkhmer Sleokchher  ',fontWeight: 'bolder  ',lineHeight: '41px  ',letterSpacing: '2px'}}><u style={{marginTop:'5px'}}>EXPLORE</u></h1>
			<h1 class="typing" style={{color:'white  ',fontFamily: 'Konkhmer Sleokchher  ',fontWeight: 'bolder  ',lineHeight: '41px  ',letterSpacing: '2px'}}>THE <b style={{color:'yellow'}}>WORLD</b> TOGETHER...</h1>
        </div>
		</div>	  
	  </div>
    
	</div>
  </div>

</div>

{/* <!-- ------------------ start mobile home slider---------- --> */}


{/* <!-- -----------------------------------Start -------------- --> */}
<div style={{background: 'url("images/backgrounds/2.png")',paddingLeft:'50px',paddingRight:'50px',paddingTop:'10px',paddingBottom:'10px'}}>
<div class="container">
<div class="row">

<div class="col-lg-3 col-md-6 col-xs-6 col-6">
<div style={{textAlign:'center'}}><img src={i2} class="img-fluid" style={{maxHeight:'120px',width:'auto'}} />
<br/><b>HOLIDAY</b>
</div>
</div>

<div class="col-lg-3 col-md-6 col-xs-6 col-6">
<div style={{textAlign:'center'}}><img src={i4} class="img-fluid" style={{maxHeight:'120px',width:'auto'}} />
<br/><b>WINE</b>
</div>
</div>

<div class="col-lg-3 col-md-6 col-xs-6 col-6">
<div style={{textAlign:'center'}}><img src={i1} class="img-fluid" style={{maxHeight:'120px',width:'auto'}} />
<br/><b>CRUISE</b>
</div>
</div>

<div class="col-lg-3 col-md-6 col-xs-6 col-6">
<div style={{textAlign:'center'}}><img src={i3} class="img-fluid" style={{maxHeight:'120px',width:'auto'}} />
<br/><b>WEDDING</b>
</div>
</div>



</div>
</div>
</div>
{/* <!-- -----------------------------------End-------------- --> */}



<div className="deskContent">
<div >
<div className="container">

<div>
<h1 style={{textAlign:'center',marginTop:'15px',marginBottom:'30px  ',color:'#3c77c9  ',fontFamily:'Bagel Fat One  ',fontSize:'50px'}}>&nbsp; Why Travel with OYT ? &nbsp;
</h1>
</div>

<div className="row">

<div className="col-lg-3 col-md-3 col-xs-6">
<div className="card cardkkhh" style={{width: '100%',borderRadius:'10px',border:'0',boxShadow: '2px 5px 20px 5px grey'}}>
  <img className="card-img-top" src={k1} alt="oyt" style={{position:'relative',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}/>
  <div className="card-body" style={{padding:'0.2rem  '}}>
<div style={{textAlign:'center'}}><img className="img-fluid" src={icon1} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-35px'}}/></div>  
    <h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'25px  ',marginBottom:'2px',color:'black',textShadow: '1px 2px 5px grey'}}>2000+ Our Worlwide Guide for Travelers</h5>
  </div>
</div>
</div>

<div className="col-lg-3 col-md-3 col-xs-6">
<div className="card cardkkhh" style={{width: '100%',borderRadius:'10px',border:'0',boxShadow: '2px 5px 20px 5px grey'}}>
  <img className="card-img-top" src={k2} alt="oyt" style={{position:'relative',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}/>
  <div className="card-body" style={{padding:'0.2rem  '}}>
<div style={{textAlign:'center'}}><img className="img-fluid" src={icon2} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-35px'}}/></div>  
    <h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'25px  ',marginBottom:'2px',color:'black',textShadow: '1px 2px 5px grey'}}>100% Trusted Tour Agency since starting</h5>
  </div>
</div>
</div>

<div className="col-lg-3 col-md-3 col-xs-6">
<div className="card cardkkhh" style={{width: '100%',borderRadius:'10px',border:'0',boxShadow: '2px 5px 20px 5px grey'}}>
  <img className="card-img-top" src={k3} alt="oyt" style={{position:'relative',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}/>
  <div className="card-body" style={{padding:'0.2rem  '}}>
<div style={{textAlign:'center'}}><img className="img-fluid" src={icon3} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-35px'}}/></div>  
    <h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'25px  ',marginBottom:'2px',color:'black',textShadow: '1px 2px 5px grey'}}>98% Our Travelers are Happy</h5>
  </div>
</div>
</div>

<div className="col-lg-3 col-md-3 col-xs-6">
<div className="card cardkkhh" style={{width: '100%',borderRadius:'10px',border:'0',boxShadow: '2px 5px 20px 5px grey'}}>
  <img className="card-img-top" src={k4} alt="oyt" style={{position:'relative',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}/>
  <div className="card-body" style={{padding:'0.2rem  '}}>
<div style={{textAlign:'center'}}><img className="img-fluid" src={icon4} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-35px'}}/></div>  
    <h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'25px  ',marginBottom:'2px',color:'black',textShadow: '1px 2px 5px grey'}}>2000+ Our Worlwide Guide for Travelers</h5>
  </div>
</div>
</div>



</div>
</div>
<br/><br/>
</div>
</div>



 {/* -----------------------------------Start FirstSection mobile view --------------  */}


 {/* ------------------------mbslider 3---------------- */}

<div className="phoneContent" style={{padding:'10px'}}>

<div>
<h1 className="hhed" style={{textAlign:'center',marginTop:'15px',marginBottom:'15px  ',color:'#3c77c9  ',fontFamily:'Bagel Fat One  ',fontSize:'22px'}}>&nbsp; Why Travel with OYT ? &nbsp;
</h1>
</div>

<br/>


		<div className="container">
        <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: scale;autoplay: true;" style={{borderRadius:'10px',boxShadow:'2px 1px 7px 1px slategray'}}>

            <ul className="uk-slideshow-items" style={{borderRadius:'10px'}}>

			<li>
			<img src={k1} alt="oyt" uk-cover />
			<div className="uk-overlay uk-overlay-primary2 uk-position-bottom uk-text-center uk-transition-slide-bottom" style={{borderBottom:'2px solid #3c77c9',borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}>                
				<div className="card-body">
				<div style={{textAlign:'center'}}><img className="img-fluid" src={icon1} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-10px'}}/></div>  
				<h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'50px  ',marginBottom:'-15px',color:'#3c77c9'}}>2000+ Our Worlwide Guide for Travelers</h5>
				</div>					
            </div>
			</li>

            <li>
			<img src={k2} alt="oyt" uk-cover />
			<div className="uk-overlay uk-overlay-primary2 uk-position-bottom uk-text-center uk-transition-slide-bottom" style={{borderBottom:'2px solid #3c77c9',borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}>                
				<div className="card-body">
				<div style={{textAlign:'center'}}><img className="img-fluid" src={icon2} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-10px'}}/></div>  
				<h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'50px  ',marginBottom:'-15px',color:'#3c77c9'}}>2000+ Our Worlwide Guide for Travelers</h5>
				</div>					
            </div>
			</li>

            <li>
			<img src={k3} alt="oyt" uk-cover />
			<div className="uk-overlay uk-overlay-primary2 uk-position-bottom uk-text-center uk-transition-slide-bottom" style={{borderBottom:'2px solid #3c77c9',borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}>                
				<div className="card-body">
				<div style={{textAlign:'center'}}><img className="img-fluid" src={icon3} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-10px'}}/></div>  
				<h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'50px  ',marginBottom:'-15px',color:'#3c77c9'}}>2000+ Our Worlwide Guide for Travelers</h5>
				</div>					
            </div>
			</li>

            <li>
			<img src={k4} alt="oyt" uk-cover />
			<div className="uk-overlay uk-overlay-primary2 uk-position-bottom uk-text-center uk-transition-slide-bottom" style={{borderBottom:'2px solid #3c77c9',borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}>                
				<div className="card-body">
				<div style={{textAlign:'center'}}><img className="img-fluid" src={icon4} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-10px'}}/></div>  
				<h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'50px  ',marginBottom:'-15px',color:'#3c77c9'}}>2000+ Our Worlwide Guide for Travelers</h5>
				</div>					
            </div>
			</li>

				

				
            </ul>

            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

        </div>

    </div>
</div>

<br/>

{/* <!-- -----------------------------------Start Cruise view-------------- --> */}
<div>
<div style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<div class="container">
<br/>
<div>
<h1 class="sectionheading">&nbsp; Cruise &nbsp;</h1>
<div class="line"></div>
</div>

<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-5@l uk-grid">
         
		{
    data2.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src={'/uploads/cruise_items/'+item.image} width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/cruisedetailpage/' + item.id}><h5 class="uk-card-title">{ item.name } </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/cruise2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Cruise</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/cruise2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Cruise</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/cruise1.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Cruise</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/cruise2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Cruise</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/cruise4.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Cruise</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/cruise2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Cruise</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
                       				



        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>


</div>
</div>


{/* <!-- -----------------------------------END CRUISE view -------------- --> */}



<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily:'"Times New Roman", serif  '}}>&nbsp; WELLNESS RESORTS &nbsp;
	</h1>
	<div class="line" style={{margin:'7px auto 5px  '}}></div>
	</div>


<div style={{marginTop:'2px',marginBottom:'2px'}}>
<div class="row">
<div class="col-6 nopdding1">
      <img src="images/trips/resort1.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopdding1">
      <img src="images/trips/resort2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>
</div>

<div class="row">
 <div class="col-4 nopdding1">
      <img src="images/trips/resort3.jpg" class="img-fluid w-100" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
    </div>
    <div class="col-4 nopdding1">
      <img src="images/trips/resort3.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
    </div>
    <div class="col-4 nopdding1">
      <img src="images/trips/resort3.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
    </div>

</div>
</div>

    <div class="col-12 nopdding1" style={{marginTop:'2px'}}>
      <img src="images/trips/resort4.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
    </div>
    
    
<br/>



<br/>


<div>
<img class="img-fluid" src="images/banner1.jpg" style={{width:'auto',borderRadius: '7px  '}} alt="oyt" />
</div>



<div class="deskContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>

<br/>
<img class="planeimg" src="images/plane.png" alt="oyt"/>

<div class="container">
<div class="row">

<div class="col-lg-6 col-md-6 col-xs-12">

<div>
<h1 style={{textAlign:'left',marginTop:'0',color:'#712b2c'}}>&nbsp; HOLIDAY PACKAGES &nbsp;
</h1>
<div class="line" style={{float:'left',marginLeft:'20px',width:'20%'}}></div>
</div>

<div class="">
{/* <!-- ------------------------PC Slider Start----------------> */}
<div>
<div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators" style={{bottom: '-55px  '}}>
    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
  </ol>
<div class="carousel-inner">
  
  <div class="carousel-item active">
	<div class="row" style={{padding:'5px'}}>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday1.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday2.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>


	</div>    
	</div>
  
  <div class="carousel-item">
	<div class="row" style={{padding:'5px'}}>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday1.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday2.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>


	</div>    
	</div>
	  <div class="carousel-item">
	<div class="row" style={{padding:'5px'}}>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday1.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday2.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>


	</div>    
	</div>
	
	
</div>
</div>
</div>
{/* <!-- ------------------------End PC Slider----------------> */}
</div>



</div>

<div class="col-lg-6 col-md-6 col-xs-12">

<div>
<h1 style={{textAlign:'right',marginTop:'0',color:'#712b2c'}}>&nbsp; CARAVAN &nbsp;
</h1>
<div class="line" style={{float:'right',marginRight:'20px',width:'15%'}}></div>
</div>

<div class="">
{/* <!-- ------------------------PC Slider Start----------------> */}
<div>
<div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators" style={{bottom: '-55px  '}}>
    <li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
  </ol>
<div class="carousel-inner">
  
  <div class="carousel-item active">
	<div class="row" style={{padding:'5px'}}>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/caravan1.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Caravan</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/caravan2.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Caravan</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>


	</div>    
	</div>
  
  <div class="carousel-item">
	<div class="row" style={{padding:'5px'}}>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/caravan1.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Caravan</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/caravan2.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Caravan</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>


	</div>    
	</div>
	  <div class="carousel-item">
	<div class="row" style={{padding:'5px'}}>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/caravan1.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Caravan</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/caravan2.jpg" width="1800" height="1200" alt=""/>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Caravan</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink"  style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>
</div>


	</div>    
	</div>
	
	
</div>
</div>
</div>
{/* <!-- ------------------------End PC Slider----------------> */}
</div>

<br/><br/>

</div>
</div>
</div>
</div>

{/* <!-- -----------------------------------END pc carasual section -------------- --> */}




{/* <!-- -----------------------------------Start Two carasual Mobile view section -------------- --> */}

<div class="container phoneContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<div class="uk-child-width-expand@s" uk-grid>
    <div>
<br/>
<div>
<h1 class="sectionheading">&nbsp; HOLIDAY PACKAGES &nbsp;</h1>
<div class="line"></div>
</div>

<div class="uk-slider-container" uk-slider="autoplay: true;autoplay-interval: 6000;pause-on-hover: true">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid">
            
			<li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday1.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday1.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
                      					
                       						
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>    
    </div>
	

    <div>
<br/>
<img class="planeimg" src="images/plane.png" alt="oyt"/>



<div>
<h1 class="sectionheading">&nbsp; CARAVAN &nbsp;</h1>
<div class="line"></div>
</div>

<div class="uk-slider-container" uk-slider="autoplay: true;autoplay-interval: 6000;pause-on-hover: true">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid">
            
        <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/caravan2.jpg" width="1800" height="1200" alt="" />
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
            </li>
            <li>
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
            </li>
            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/caravan2.jpg" width="1800" height="1200" alt="" />
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
            </li>
            <li>
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
            </li>

                  
                  
                       						
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>
    </div>




{/* <!-- -----------------------------------End Two carasual section -------------- --> */}

<br/>
<div class="phoneContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily: '"Times New Roman", serif  '}}>&nbsp; CHARTED PLANES &nbsp;
	</h1>
	<div class="line"></div>
	</div>
	
<div class="row">
<div class="col-6 nopddingL" style={{marginBottom:'10px'}}>
<img src="images/trips/cplane2.jpg" alt="" />
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopddingR" style={{marginBottom:'10px'}}>
<img src="images/trips/cplane1.jpg" alt="" />
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>	
	
<div class="row">
<div class="col-12 nopdding" style={{marginBottom:'10px'}}>
<img src="images/trips/cplane4.jpg" alt="" />
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>	
	
<div class="row">
<div class="col-6 nopddingL">
<div class="cardnew">
<div class="poster">
<img src="images/trips/cplane3.jpg" alt="" />
</div>
<div class="details">
<b>CHARTED PLANES</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>CHARTED PLANES</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'5px'}}>
<b style={{color:'#fff',fontSize:'7px'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon3"></i>
<i class="fa fa-shopping-cart cardicon4"></i>
</div>
</div>
</div>
</div>
<div class="col-6 nopddingR">
<div class="cardnew">
<div class="poster">
<img src="images/trips/trip6n.jpg" alt="" />
</div>
<div class="details">
<b>CHARTED PLANES</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>CHARTED PLANES</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'5px'}}>
<b style={{color:'#fff',fontSize:'7px'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon3"></i>
<i class="fa fa-shopping-cart cardicon4"></i>
</div>
</div>
</div>
</div>
</div>

</div>

<div class="col-12" style={{marginTop:'10px'}}>

<div class="row">
<div class="col-6 nopddingL">
      <img src="images/trips/cplane5.jpg" class="img-fluid" alt="OYT"/>
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopddingR">
      <img src="images/trips/cplane6.jpg" class="img-fluid" alt="OYT"/>
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>

<br/>
</div>
</div>


<br/>
<div class="deskContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily: '"Times New Roman", serif  '}}>&nbsp; CHARTED PLANES  &nbsp;
	</h1>
	<div class="line"></div>
	</div>

<div class="col-12" style={{marginBottom:'10px'}}>

<div class="row">
<div class="col-6 nopddingL">
      <img src="images/trips/cplane2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopddingR">
      <img src="images/trips/cplane1.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>

</div>	

<div class="col-12">

<div class="row">
<div class="col-12 nopdding1">
<img src="images/trips/cplane4.jpg" style={{width:'100%',borderRadius:'7px 7px 1px 1px  '}} class="img-fluid" alt="OYT"/>
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>
</div>
	
<div style={{padding:'15px'}}>	
<div class="row">
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/cplane3.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff'}}>CHARTED PLANES </b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>CHARTED PLANES </span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/trip6n.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff'}}>CHARTED PLANES </b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>CHARTED PLANES </span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/cplane5.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff'}}>CHARTED PLANES </b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>CHARTED PLANES </span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/cplane6.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff'}}>CHARTED PLANES </b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>CHARTED PLANES </span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>

</div>


<br/>
</div>
</div>
</div>

<br/>

<div>
<img class="img-fluid" src="images/banner2.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px',borderRadius: '7px  '}} alt="oyt" />
</div>


{/* <!-- -----------------------------------Start Wedding view-------------- --> */}
<div>
<div style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<div class="container">
<br/>
<div>
<h1 class="sectionheading">&nbsp; Wedding &nbsp;</h1>
<div class="line"></div>
</div>

<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-5@l uk-grid">
         
		
                    					<li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wedding2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wedding</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wedding3.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wedding</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wedding4.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wedding</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wedding1.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wedding</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wedding2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wedding</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wedding3.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wedding</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wedding4.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wedding</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
                       				



        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>


</div>
</div>


{/* <!-- -----------------------------------END Wedding view -------------- --> */}

<div style={{textAlign:'center'}}>
<img src="images/trips/honeymoon2.jpg" style={{borderRadius:'7px'}} class="img-fluid" alt="oyt"/>
</div>


{/* <!-- -----------------------------------------------Start Honeymoon section ------ --> */}

<br/>
<div class="phoneContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily: '"Times New Roman", serif  '}}>&nbsp; HONEYMOON &nbsp;
	</h1>
	<div class="line"></div>
	</div>


	
<div class="row">
<div class="col-6 nopddingL" style={{marginBottom:'10px'}}>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{borderBottomLeftRadius:'1px  ',borderBottomRightRadius:'1px  ',padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">HONEYMOON</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
<img src="images/trips/honeymoon1.jpg" style={{border:'2px solid #f5640a',borderRadius:'1px 1px 100px 20px  '}} alt="oyt" /></div>
<div class="col-6 nopddingR" style={{marginBottom:'10px'}}>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{borderBottomLeftRadius:'1px  ',borderBottomRightRadius:'1px  ',padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">HONEYMOON</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
<img src="images/trips/honeymoon5.jpg" style={{border:'2px solid #f5640a',borderRadius:'1px 1px 10px 100px  '}} alt="oyt" /></div>
</div>	
<div style={{position:'relative',marginTop:'-40px',textAlign:'center',zIndex:'11'}}><img src="images/icons/icon4.png" style={{border:'2px solid #f5640a',background:'white',boxShadow:'0 5px 15px rgba(0,0,0,.08)',borderRadius:'40px 7px 40px 7px  ',height:'100px',width:'100px'}}/></div>

	
<div class="row" style={{marginTop:'-38px'}}>
<div class="col-6 nopddingL">
<img src="images/trips/honeymoon3.jpg" style={{border:'2px solid #f5640a',borderRadius:'7px 100px 1px 1px  '}} class="img-fluid" alt="OYT"/>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">HONEYMOON</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopddingR">
<img src="images/trips/honeymoon8.jpg" style={{border:'2px solid #f5640a',borderRadius:'109px 1px 1px 1px  '}} class="img-fluid" alt="OYT"/>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">HONEYMOON</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>

</div>



<br/>
</div>
<br/>

<br/>
<div class="deskContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily: '"Times New Roman", serif  '}}>&nbsp; HONEYMOON &nbsp;
	</h1>
	<div class="line"></div>
	</div>


	
<div class="row">
<div class="col-6 nopddingL" style={{marginBottom:'10px'}}>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{borderBottomLeftRadius:'1px  ',borderBottomRightRadius:'1px  ',padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">HONEYMOON</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
<img src="images/trips/hm5.jpg" style={{border:'2px solid #f5640a',borderRadius:'1px 1px 100px 20px  '}} alt="oyt" /></div>
<div class="col-6 nopddingR" style={{marginBottom:'10px'}}>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{borderBottomLeftRadius:'1px  ',borderBottomRightRadius:'1px  ',padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">HONEYMOON</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
<img src="images/trips/hm3.jpg" style={{border:'2px solid #f5640a',borderRadius:'1px 1px 10px 100px  '}} alt="oyt" /></div>
</div>	
<div style={{position:'relative',marginTop:'-40px',textAlign:'center',zIndex:'1'}}><img src="images/icons/icon4.png" style={{border:'2px solid #f5640a',background:'white',boxShadow:'0 5px 15px rgba(0,0,0,.08)',borderRadius:'40px 7px 40px 7px  ',height:'100px',width:'100px'}}/></div>

	
<div class="row" style={{marginTop:'-38px'}}>
<div class="col-6 nopddingL">
<img src="images/trips/hm2.jpg" style={{border:'2px solid #f5640a',borderRadius:'7px 100px 1px 1px  '}} class="img-fluid" alt="OYT"/>
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">HONEYMOON</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopddingR">
<img src="images/trips/hm1.jpg" style={{border:'2px solid #f5640a',borderRadius:'109px 1px 1px 1px  '}} class="img-fluid" alt="OYT"/>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">HONEYMOON</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>

</div>



<br/>
</div>
<br/>

{/* <!-- -----------------------------------------------End Honeymoon section ------ --> */}



<div class="phoneContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
  <h1 style={{textAlign:'center',marginTop:'0',fontFamily: '"Times New Roman", serif  '}}>&nbsp; HOTELS &nbsp;
	</h1>
	<div class="line" style={{margin:'7px auto 5px  '}}></div>
	</div>
<div class="row">
<div class="col-6 nopddingL">
<div class="cardnew">
<div class="poster">
<img src="images/trips/hotels2.jpg" alt="" />
</div>
<div class="details">
<b>Hotel</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Hotel</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'5px'}}>
<b style={{color:'#fff',fontSize:'7px'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon3"></i>
<i class="fa fa-shopping-cart cardicon4"></i>
</div>
</div>
</div>
</div>
<div class="col-6 nopddingR">
<div class="cardnew">
<div class="poster">
<img src="images/trips/hotels4.jpg" alt="" />
</div>
<div class="details">
<b>Hotel</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Hotel</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'5px'}}>
<b style={{color:'#fff',fontSize:'7px'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon3"></i>
<i class="fa fa-shopping-cart cardicon4"></i>
</div>
</div>
</div>
</div>
</div>

</div>

<div class="w-100" style={{marginTop:'10px',marginBottom:'10px'}}>
      <img src="images/trips/hotels5.jpg" style={{width:'100%',borderRadius: '7px 7px 1px 1px'}} class="img-fluid" alt="OYT"/>
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Hotels</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>

<div class="col-12">

<div class="row">
<div class="col-6 nopddingL">
      <img src="images/trips/hotels1.jpg" class="img-fluid" alt="OYT"/>
	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Hotels</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopddingR">
      <img src="images/trips/hotels2.jpg" class="img-fluid" alt="OYT"/>
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Hotels</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>

<br/>
</div>
</div>



<div class="deskContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>  
<br/>
<div class="col-12">
	<div>
  <h1 style={{textAlign:'center',marginTop:'0',fontFamily: '"Times New Roman", serif  '}}>&nbsp; HOTELS  &nbsp;
	</h1>
	<div class="line"></div>
	</div>

<div style={{color:'#fff',fontSize:'0.9em',padding:'15px'}}>	
<div class="row">
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/hotels4.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff',fontSize:'0.9em'}}>Hotel</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Hotel</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/hotels4.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff',fontSize:'0.9em'}}>Hotel</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Hotel</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/hotels4.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff',fontSize:'0.9em'}}>Hotel</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Hotel</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/hotels4.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff',fontSize:'0.9em'}}>Hotel</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Hotel</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>

</div>
</div>

<div class="w-100" style={{marginBottom:'15px'}}>
      <img src="images/trips/hotels5.jpg" style={{width:'100%',borderRadius:'7px 7px 1px 1px  '}} class="img-fluid" alt="OYT"/>
	  	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Hotels</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>

<div class="col-12">
<div class="row">
<div class="col-4 nopddingL">
      <img src="images/trips/hotels1.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Hotels</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-4 nopdding1">
      <img src="images/trips/hotels2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Hotels</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-4 nopddingR">
      <img src="images/trips/hotels3.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Hotels</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>

</div>

<br/>
</div>
</div>

<br/>

<div>
<img class="img-fluid" src="images/banner3.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px',borderRadius: '7px  '}} alt="oyt" />
</div>



{/* <!-- -----------------------------------Start Wine view-------------- --> */}
<div>
<div style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<div class="container">
<br/>
<div>
<h1 class="sectionheading">&nbsp; Wine &nbsp;</h1>
<div class="line"></div>
</div>

<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-5@l uk-grid">
         
		
                    					<li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wine1.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wine</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wine3.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wine</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wine2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wine</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wine4.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wine</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wine2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wine</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wine4.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wine</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>

            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/wine2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Wine</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
                       				



        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>


</div>
</div>


{/* <!-- -----------------------------------END Wine view -------------- --> */}






<div style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily: '"Times New Roman", serif  '}}>&nbsp; VIP MEMBERSHIPS  &nbsp;
	</h1>
	<div class="line"></div>
	</div>
<div class="row">

<div class="col-6 nopddingL">
<img src="images/trips/vip1.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">VIP Membership</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>

<div class="col-6 ">

<div class="row">
<div class="col-6 nopdding1">
<img src="images/trips/vip2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}}alt="OYT"/>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title" style={{marginTop:'5px'}}>Membership</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopdding1">
<img src="images/trips/vip2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title" style={{marginTop:'5px'}}>Membership</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>
<div class="row">
<div class="col-6 nopdding1" style={{marginTop:'10px'}}>
<img src="images/trips/vip4.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title" style={{marginTop:'5px'}}>Membership</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopdding1" style={{marginTop:'10px'}}>
<img src="images/trips/vip4.jpg" class="img-fluid" alt="OYT"/>
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title" style={{marginTop:'5px'}}>Membership</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>

</div>





</div>


</div>
<br/>
</div>	
	



<br/>
<div class="phoneContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
  <h1 style={{textAlign:'center',marginTop:'0',fontFamily: '"Times New Roman", serif  '}}>&nbsp; GOLF GROUNDS  &nbsp;
	</h1>
	<div class="line"></div>
	</div>

<div class="row">
<div class="col-12 nopdding" style={{marginBottom:'10px'}}>
<img src="images/trips/golf4.jpg" style={{borderRadius:'7px 7px 1px 1px  '}} alt="oyt" />
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Golf Grounds</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>	
	
<div class="row">
<div class="col-6 nopddingL" style={{marginBottom:'10px'}}>
<img src="images/trips/golf2.jpg" alt="oyt" />
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Golf Grounds</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopddingR" style={{marginBottom:'10px'}}>
<img src="images/trips/golf2.jpg" alt="oyt" />
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Golf Grounds</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>	
	
<div class="row">
<div class="col-6 nopddingL">
<div class="cardnew">
<div class="poster">
<img src="images/trips/golf1.jpg" alt="" />
</div>
<div class="details">
<b>GOLF GROUNDS</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>GOLF GROUNDS</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'5px'}}>
<b style={{color:'#fff',fontSize:'7px'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon3"></i>
<i class="fa fa-shopping-cart cardicon4"></i>
</div>
</div>
</div>
</div>
<div class="col-6 nopddingR">
<div class="cardnew">
<div class="poster">
<img src="images/trips/golf1.jpg" alt="" />
</div>
<div class="details">
<b>GOLF GROUNDS</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>GOLF GROUNDS</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'5px'}}>
<b style={{color:'#fff',fontSize:'7px'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon3"></i>
<i class="fa fa-shopping-cart cardicon4"></i>
</div>
</div>
</div>
</div>
</div>

</div>

<div class="col-12" style={{marginTop:'10px'}}>

<div class="row">
<div class="col-6 nopddingL">
      <img src="images/trips/golf5.jpg" class="img-fluid" style={{borderRaidus:'7px 7px 1px 1px  '}} alt="OYT"/>
	  	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Golf Grounds</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopddingR">
      <img src="images/trips/golf6.jpg" class="img-fluid" style={{borderRaidus:'7px 7px 1px 1px  '}} alt="OYT"/>
	  	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Golf Grounds</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>

</div>

<div class="w-100">
<img src="images/trips/golf3.jpg" style={{marginTop:'10px',borderRadius: '7px 7px 1px 1px  '}} class="img-fluid" alt="OYT"/>
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Golf Grounds</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>

<br/>
</div>


<br/>

<div class="deskContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
  <h1 style={{textAlign:'center',marginTop:'0',fontFamily: '"Times New Roman", serif  '}}>&nbsp; GOLF GROUNDS  &nbsp;
	</h1>
	<div class="line"></div>
	</div>

<div class="w-100" style={{marginBottom:'10px'}}>
      <img src="images/trips/golf4.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px '}} alt="OYT"/>
	  	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Golf Grounds</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>	
	
<div class="col-12">

<div class="row">
<div class="col-6 nopddingL">
      <img src="images/trips/golf2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Golf Grounds</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopddingR">
      <img src="images/trips/golf2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Golf Grounds</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>

</div>	

<div style={{padding:'15px'}}>	
<div class="row">
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/golf1.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff'}}>GOLF GROUNDS </b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>GOLF GROUNDS </span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/golf1.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff'}}>GOLF GROUNDS </b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>GOLF GROUNDS </span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/golf1.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff'}}>GOLF GROUNDS </b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>GOLF GROUNDS </span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/golf1.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff'}}>GOLF GROUNDS </b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>GOLF GROUNDS </span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>

</div>

</div>

<div class="w-100">
<img src="images/trips/golf3.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px '}} alt="oyt" />
	  	   <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Golf Grounds</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>

<br/>
</div>
</div>

<br/>
	

{/* <!-- -----------------------------------Start NEWS -------------- -->	 */}
<div>
<div style={{padding:'10px'}}>
<div class="container">
<div>
<h1 style={{textAlign:'center',marginTop:'0',fontFamily: '"Times New Roman", serif  '}}>&nbsp; LATEST TRAVEL NEWS  &nbsp;
</h1>
<div class="line" style={{width:'25%'}}></div>
</div>
<div class="row">

<div class="col-lg-6 col-md-6 col-xs-12">
<div style={{padding:'5px'}}>

<div class="card" style={{borderRadius:'10px',marginBottom:'10px'}}>
<div class="row">
<div class="col-4">
<div style={{textAlign:'left'}}><img src="images/photo2.jpg" class="img-fluid" style={{height:'100px',width:'auto',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}/></div>
</div>
<div class="col-8">
<h6 class="spnhh">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
<span class="spnheading">26 Oct 2021 &nbsp; &nbsp; &#9679; 5 min read</span>
</div>
</div>
</div>

<div class="card" style={{borderRadius:'10px',marginBottom:'10px'}}>
<div class="row">
<div class="col-4">
<div style={{textAlign:'left'}}><img src="images/photo2.jpg" class="img-fluid" style={{height:'100px',width:'auto',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}/></div>
</div>
<div class="col-8">
<h6 class="spnhh">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
<span class="spnheading">26 Oct 2021 &nbsp; &nbsp; &#9679; 5 min read</span>
</div>
</div>
</div>

<div class="card" style={{borderRadius:'10px',marginBottom:'10px'}}>
<div class="row">
<div class="col-4">
<div style={{textAlign:'left'}}><img src="images/photo2.jpg" class="img-fluid" style={{height:'100px',width:'auto',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}/></div>
</div>
<div class="col-8">
<h6 class="spnhh">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
<span class="spnheading">26 Oct 2021 &nbsp; &nbsp; &#9679; 5 min read</span>
</div>
</div>
</div>

<div class="card" style={{borderRadius:'10px',marginBottom:'10px'}}>
<div class="row">
<div class="col-4">
<div style={{textAlign:'left'}}><img src="images/photo2.jpg" class="img-fluid" style={{height:'100px',width:'auto',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}/></div>
</div>
<div class="col-8">
<h6 class="spnhh">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
<span class="spnheading">26 Oct 2021 &nbsp; &nbsp; &#9679; 5 min read</span>
</div>
</div>
</div>

<a href="#" style={{color:'blue',fontSize:'14px'}}><b>See all article &nbsp;<i class="fa fa-long-arrow-right"></i></b></a>
</div>
</div>

<div class="col-lg-6 col-md-6 col-xs-12">

<div style={{textAlign:'left'}}><img src="images/photo3.jpg" class="img-fluid" style={{borderRadius:'10px'}} /></div>
<h6 style={{marginTop:'10px',fontWeight:'bolder'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
<p style={{fontSize:'14px',color:'darkgrey',fontFamily: 'Geologica'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum fdvfd fdvdf dbtgf gndrv dolor sit amet, consectetur adipiscing elit.
</p>
<a href="#" style={{color:'blue',fontSize:'14px'}}><b>Read full article &nbsp;<i class="fa fa-long-arrow-right"></i></b></a>

</div>

</div>
</div>
</div>
</div>

{/* <!-- -----------------------------------END NEWS -------------- -->	 */}



<img class="arrowimg2" src="images/icons/arrow2.png" alt="oyt"/>

{/* <!-- -----------------------------------Start Email section -------------- -->	 */}
<br/>
<div>
<div class="container" style={{background:'url("images/emailbanner2.jpg")',minHeight:'200px'}}>
<div class="container">
<div class="row">

<div class="col-lg-6 col-md-6 col-xs-6">
<div style={{marginTop:'35px'}}>
<h2 style={{color:'white  ',fontFamily: 'cursive',lineHeight: '50px'}}>Let's Explore the world </h2>
<h2 style={{color:'white  ',fontFamily: 'sans-serif',fontWeight: 'bolder',lineHeight: '30px',marginTop:'20px  '}}>Get Special Offers in Your Inbox </h2>

</div>
</div>
<div class="col-lg-6 col-md-6 col-xs-6">
      <form class="newsletter-form mt-5 mb-5">
              <div class="btn-group" style={{padding:'10px',width:'100%'}}>
                <input type="text" id="search2" style={{height:'45px  ',borderRadius:'5px',borderTopLeftRadius:'10px  ',borderBottomLeftRadius:'10px  '}} class="form-control" placeholder="&nbsp; Submit your email" name="search2" />
<button class="btn btn-primary" style={{backgroundColor:'#fff  ',border:'2px solid #fff  ',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}><i class="fa fa-location-arrow" style={{fontSize:'20px',color:'#f5640a',paddingTop:'5px'}}></i></button>
				</div>
            </form>
</div>

</div>
</div>
</div>
</div>
<br/>



        </>
    );
}

export default Homebanner;